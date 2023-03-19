
import Link from 'next/link';
import { QRCodeCanvas } from "qrcode.react";
import React, { useContext, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from 'react-modal';
import AppContext from '../../../contexts/AppContext';
import { ModalContent } from './styles';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    maxWidth: '450px'
  },
};

interface IUserState {
  email: string;
  password: string;
}

export const QrCode = () => {
  const {qrCodeModalIsOpen, setQrCodeModalIsOpen, qrCode} = useContext(AppContext);
  const [linkCopied, setLinkCopied] = useState(false)
  const qrRef = useRef<any>();

  const url = `http://localhost:3000/direcionar/${qrCode}`

  function closeModal() {
    setLinkCopied(false)
    setQrCodeModalIsOpen(false);
  }

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );

  const downloadQRCode = (e: React.MouseEvent) => {
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <>
      <Modal
        isOpen={qrCodeModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal QrCode"
        ariaHideApp={false}
      >
        <ModalContent>
          <h2>🤩 Seu link do zap está pronto!</h2>
          <p>
            Copie-o e compartilhe-o via e-mails, mensagens, 
            seu site ou até mesmo nas redes sociais. 
            Baixe também, o código QR para compartilhá-lo em qualquer lugar.
          </p>
          <div className='zap-link'>
            <Link href={url}>
              <a>{`webzapme/${qrCode}`}</a>
            </Link>
          </div>
          <div className='zap-qrcode' ref={qrRef}>{qrcode}</div>
          <div className='footer'>
            <button className='close' onClick={closeModal}>Fechar</button>
            <CopyToClipboard text={url} onCopy={() => setLinkCopied(true)}>
              <button className='button copy-link'>
              { linkCopied ? 'Copiado!' : 'Copiar Link' }
              </button>
            </CopyToClipboard>
            <button className='button copy-qrcode' onClick={downloadQRCode}>
              Baixar QrCode
            </button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}