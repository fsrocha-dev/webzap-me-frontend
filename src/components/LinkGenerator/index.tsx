import axios from 'axios';
import dynamic from 'next/dynamic';
import 'Devices.css/assets/devices.min.css';
import Image from "next/image";
import { LegacyRef, useContext, useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import MaskedInput from 'react-text-mask'
import AppContext from '../../contexts/AppContext';
import { getLocalStorageValue } from '../../utils/LocalStorage';
import whatsappLink from '../../utils/WhatsappLink';
import { QrCode } from '../Modals/QrCode';
import {
	DevicePhone, DisplayedMessage, EmojiButton, GenerateButton, LinkGeneratorContainer,
	LinkGeneratorContent,
	LinkGeneratorForm,
	LinkGeneratorHeader
} from './styles';
import { EmojiStyle } from 'emoji-picker-react';
const Picker = dynamic(
	() => {
		return import('emoji-picker-react');
	},
	{ ssr: false }
);

interface AnchorProps {
	LinkGeneratorAnchor: LegacyRef<HTMLHeadingElement>
}

interface IFormLink {
	phone_number: string | null;
	custom_message: string;
}

export function LinkGenerator(props: AnchorProps) {

	const { LinkGeneratorAnchor } = props
	const { setQrCodeModalIsOpen, setQrCode, setLoginModelIsOpen } = useContext(AppContext);
	const [formLinkValue, setFormLinkValue] = useState<IFormLink>({ phone_number: null, custom_message: '' })
	const [showBubble, setShowBubble] = useState(false)
	const [message, setMessage] = useState<string | null>(null)
	const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState<boolean>(false)

	useEffect(() => {
		if (formLinkValue.custom_message) {
			const secondsDelay = 4
			let timerBubbleMessage = setTimeout(() => {
				setShowBubble(true)
			}, secondsDelay * 1000);

			return () => {
				clearTimeout(timerBubbleMessage);
			};
		}
	}, [formLinkValue.custom_message])

	const formatCellNumber = (celNumber: string) => {
		return celNumber.replace(/[^\w\s]/gi, '').replaceAll(' ', '')
	}

	const generateLink = async (event: React.FormEvent) => {
		event.preventDefault();
		const checkLoggedUser = getLocalStorageValue('loggedUser')

		if (!checkLoggedUser) {
			toast("Você deve estar logado para criar um link")
			setLoginModelIsOpen(true)
		} else {

			try {
				const URL = 'http://localhost:5001/links'
				const headers = { headers: { "Authorization": `Bearer ${checkLoggedUser.token}` } }
				const zapLink = whatsappLink(formLinkValue)
				const { data } = await axios.post(URL, { ...formLinkValue, whatsapp_link: zapLink }, headers)

				setQrCode(data.ref)
				setQrCodeModalIsOpen(true)

			} catch (error: any) {
				setMessage(error.response.data)
			}
		}
	}

	const openEmojiPicker = async (e) => {
		e.preventDefault()
		setEmojiPickerIsOpen(!emojiPickerIsOpen)
	}

	const addEmojiOnTextAreaMessage = async (e) => {
		const emoji = ` ${e.emoji}`
		let { custom_message: message } = formLinkValue
		setFormLinkValue({ ...formLinkValue, custom_message: message += emoji })
		setEmojiPickerIsOpen(false)
	}

	return (
		<LinkGeneratorContainer>
			<LinkGeneratorHeader>
				<h2 ref={LinkGeneratorAnchor}>
					Crie gratuitamente o seu link abaixo!
				</h2>
			</LinkGeneratorHeader>
			<LinkGeneratorContent>
				<LinkGeneratorForm>
					<label>
						Digite o seu número de WhatsApp
						<MaskedInput
							mask={[
								'(', /[1-9]/, /\d/, ')',
								' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
							guide={false}
							placeholder='Seu número de telefone'
							onChange={(e) => setFormLinkValue({ ...formLinkValue, phone_number: formatCellNumber(e.target.value) })}
							value={formLinkValue.phone_number ?? ''}
						/>
						<small>Obs: Verifique se inseriu o código de área.</small>
					</label>
					<label>
						Digite sua mensagem personalizada
						<textarea
							rows={4}
							onChange={(e) => setFormLinkValue({ ...formLinkValue, custom_message: e.target.value })}
							value={formLinkValue.custom_message ?? ''}
							placeholder='Mensagem personalizada que os usuários enviarão para seu zap' />
						<small>Ex: Olá, estou muito interessado em seu produto! Pode falar agora?</small>
						<EmojiButton onClick={openEmojiPicker}>
							🤩 Adiconar emoji
						</EmojiButton>
						<span style={{ position: "absolute", marginTop: "-80px", marginLeft: "130px" }}>
							{emojiPickerIsOpen
								&&
								<Picker
									emojiStyle={EmojiStyle.TWITTER}
									onEmojiClick={(e) => addEmojiOnTextAreaMessage(e)}
								/>}
						</span>
					</label>
					<div className='error-message'>
						{message}
					</div>
					<GenerateButton onClick={generateLink}>
						Criar meu link
					</GenerateButton>
				</LinkGeneratorForm>
				<DisplayedMessage>
					<RiArrowDropRightLine />
					<span>
						Veja ao lado como será exibido
					</span>
				</DisplayedMessage>
				<DevicePhone>
					<div className="marvel-device iphone8 silver">
						<div className="top-bar"></div>
						<div className="sleep"></div>
						<div className="volume"></div>
						<div className="camera"></div>
						<div className="sensor"></div>
						<div className="speaker"></div>
						<div className="screen">
							<div className="screen-header" >
								<Image
									src="/images/profile-pic.svg"
									alt="Imagem do usuário"
									layout="fixed"
									width={35}
									height={35} />
								<span>+55 {formLinkValue.phone_number}</span>
							</div>
							<div className="screen-content">
								{showBubble === true &&
									<div className="bubble-message">
										{formLinkValue.custom_message}
									</div>
								}
							</div>
							<div className="screen-footer">
								<div className="footer-input">
									{formLinkValue.custom_message}
								</div>
								<div className="footer-send">
									<MdSend />
								</div>
							</div>
						</div>
						<div className="home"></div>
						<div className="bottom-bar"></div>
					</div>
				</DevicePhone>
			</LinkGeneratorContent>
			<QrCode />
		</LinkGeneratorContainer>
	)
}
