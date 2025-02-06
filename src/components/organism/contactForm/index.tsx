import React, { HTMLProps, useState } from "react"
import "./index.css"
import InputField from "../../molecule/inputField/index.tsx"
import emailjs from "emailjs-com"
import styles from "./index.module.css"
import ArrowRight from "../../atom/arrowRightSvg/index.tsx"
import CustomButton from "../../atom/btn-primary/index.tsx"

interface Props extends HTMLProps<HTMLDivElement>{
	title?: string
	subtitle?: string
}

const ContactForm: React.FC<Props> = ({
	title = "Contact me",
	subtitle = "Got a project in mind, need a developer for your team, or just want to say hi? I’m always up for a chat about creating sleek, user-friendly web and mobile experiences. Drop me a message—I’d love to hear from you!",
	...props
}) => {
	const [form, setForm] = React.useState({
		name: "",
		email: "",
		message: ""
	})

	const [loading, setIsLoading] = useState<boolean>(false)

	const onSubmit = (e: any) => {
		setIsLoading(true)
		e.preventDefault() // This is important, i'm not sure why, but the email won't send without it

		if (form.name === "" || form.email === "" || form.message === "") {
			alert("Please fill in all fields")
			setIsLoading(false)
			return
		}

		emailjs
			.sendForm(
				"service_p4ty08n",
				"template_jesklnf",
				e.target,
				"40iimWgKMmbAK8dT3"
			)
			.then(
				() => {
					alert(
						"The message have been received. I will get back to you shortly!"
					)
					window.location.reload() // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
				},
				(error) => {
					alert("Error sending message. Please try again later.")
					console.log(error.text)
					window.location.reload() // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
				}
			)
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<section
			id="contact"
			className={`contact-us-container ${styles.contactUsContainer} ${props.className}`}
		>
			<div className="contact-us-title-container">
				<h1 className={styles.title}>{title}</h1>
				<p className="contact-us-text">{subtitle}</p>
			</div>

			<form onSubmit={onSubmit} className="contact-form-container">
				<div id="form-content">
					<InputField
						label={"First and last name"}
						name="from_name"
						onChangeText={(e) => {
							setForm({ ...form, name: e.target.value })
						}}
						inputType="text"
					/>
					<InputField
						name="reply_to"
						label={"Email"}
						onChangeText={(e) => {
							setForm({ ...form, email: e.target.value })
						}}
						inputType="email"
					/>

					<InputField
						name="message"
						label={"Message"}
						onChangeText={(e) => {
							setForm({ ...form, message: e.target.value })
						}}
						inputType="textarea"
					/>

					{!loading && (
						<div className={styles.sendBtnContainer}>
							<CustomButton
								className="send-message-btn"
								title="Send"
								type="submit"
								icon={<ArrowRight />}
							/>
						</div>
					)}
				</div>
			</form>
		</section>
	)
}

export default ContactForm
