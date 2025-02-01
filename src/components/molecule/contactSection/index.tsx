import React from 'react'
import './index.css'
import EmailSvg from '../../atom/emailsvg/index.tsx'
import { checkIsMobile } from '../../../helpers/index.tsx'

interface Props {
  icon?: React.JSX.Element
  title: string,
  subtitle: string,
  value: string,
  lang?: string
}

const ContactSection : React.FC<Props> = ({
  icon = <EmailSvg />,
  title = 'title',
  subtitle = 'subtitle',
  value = 'value',
  lang = 'hr'
}) => {
  return (
    <div className='contact-section-container'>
      <div className='contact-section-title'>
        {icon}
        <h3 className='subtitle'>
          {title}
        </h3>
      </div>

      <p>
        {subtitle}
      </p>
      <p>
        <a id='email' href={checkIsMobile(navigator.userAgent) ? lang === 'hr' ? 'mailto:hello@mcode.hr?subject=Upit&body=Pozdrav, \nZanima me ..' : 'mailto:hello@mcode.hr?subject=Upit&body=Pozdrav, \nZanima me ..' : lang === 'hr' ? 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@mcode.hr&su=Upit&body=Pozdrav, \nZanima me ..' : 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@mcode.hr&su=Inqury&body=Hello, \nI would like to ..'} target='_blank' rel="noreferrer">
          {value}
        </a>
      </p>
    </div>
  )
}

export default ContactSection
