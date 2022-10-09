import { CallToActionContainer, CallToActionContent } from './styles'

interface ICallToAction {
  title: string,
  subtitle?: string,
  children?: React.ReactNode
}

export function CallToAction(props: ICallToAction) {
  return (
    <CallToActionContainer>
      <CallToActionContent>
        <span>{props.subtitle ?? ''}</span>
        <h1>{props.title}</h1>
        {props.children}
      </CallToActionContent>
    </CallToActionContainer>
  )
}