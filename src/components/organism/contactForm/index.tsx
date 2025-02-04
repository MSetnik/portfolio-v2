import React, { useState } from "react"
import "./index.css"
import InputField from "../../molecule/inputField/index.tsx"
import emailjs from "emailjs-com"
import BtnPrimary from "../../atom/btn-primary/index.tsx"
import styles from "./index.module.css"
import ArrowRight from "../../atom/arrowRightSvg/index.tsx"

interface Props {
	lang?: "en" | "hr"
	title?: string
	subtitle?: string
}

const ContactForm: React.FC<Props> = ({
	lang = "hr",
	title = "Javite nam se!",
	subtitle = "Ako želite koristit našu aplikaciju, ili saznati više slobodno nas kontaktirajte. Ispunite kontakt formu sa strane ili nam se javite na email, a mi ćemo vam odgovoriti što je brže moguće."
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
				"service_dyohpos",
				"template_7b2nhhk",
				e.target,
				"MyQGY88hp7_8-vwvc"
			)
			.then(
				(result) => {
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
			className={`contact-us-container ${styles.contactUsContainer}`}
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
							<BtnPrimary
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
