import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Row, Col, Button, Select, DatePicker } from 'antd'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

const Register = () => {
	const { t } = useTranslation()
	const [form] = Form.useForm()
	const { getFieldValue } = form
	const { Option } = Select
	const currentDate = moment()

	const compareToFirstPassword = (rule: any, value: any) => {
		return value && value !== getFieldValue('password')
			? Promise.reject(t('inconsistent_password'))
			: Promise.resolve()
	}

	const validateLength = (rule: any, value: any) => {
		if (value && value.length < 3) return Promise.reject(t('minimum'))

		return value && value.length > 60 ? Promise.reject(t('maximum')) : Promise.resolve()
	}

	const validateTime = (_: any, value: any) => {
		if (value) {
			const value_format = value.format('DD/MM/YYYY')
			const date_user = moment(value_format, 'DD/MM/YYYY')
			return currentDate.diff(date_user, 'years') <= 18 ? Promise.reject(t('not_age')) : Promise.resolve()
		} else {
			return Promise.resolve()
		}
	}

	const handleSubmit = (values: any) => {
		console.log('Received values of form: ', values)
	}

	const handleChange = (value: any) => {
		console.log(`selected ${value}`)
	}
	const _handleError = (e: any) => {
		console.log(e)
	}

	return (
		<Form name="FormRegister" onFinish={handleSubmit} onFieldsChange={_handleError}>
			{/*Nombre, Apellido*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						name="name_firs"
						label={t('register.name_first')}
						hasFeedback
						rules={[
							{
								required: true,
								message: `${t('pleace')}s ${t('register.name_first')}`,
								whitespace: true,
							},
							{
								validator: validateLength,
							},
						]}>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name="register.name_last"
						label={t('register.name_last')}
						hasFeedback
						rules={[
							{
								required: true,
								message: `${t('pleace')}s ${t('register.name_last')}`,
								whitespace: true,
							},
							{
								validator: validateLength,
							},
						]}>
						<Input />
					</Form.Item>
				</Col>
			</Row>

			{/*correo, telefono*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						name="email"
						label={t('mail')}
						hasFeedback
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: `${t('pleace')} ${t('mail')}`,
							},
						]}>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name="phone"
						label={t('phone')}
						hasFeedback
						rules={[
							{
								required: true,
								message: `${t('pleace')} ${t('phone')}`,
							},
						]}>
						<Input />
					</Form.Item>
				</Col>
			</Row>

			{/*edad, sexo, estadoc ivil*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						name="sexo"
						label={t('sex')}
						hasFeedback
						rules={[
							{
								required: true,
								message: `${t('pleace_select')} ${t('sex')}`,
							},
						]}>
						<Select onChange={handleChange}>
							<Option value="F">F</Option>
							<Option value="M">M</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name="status_marital"
						label={t('status_marital')}
						hasFeedback
						rules={[
							{
								required: true,
								message: `${t('pleace_select')} ${t('status_marital')}`,
							},
						]}>
						<Select onChange={handleChange}>
							<Option value="single">{t('single')}</Option>
							<Option value="married">{t('married')}</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>

			{/*fecha de nacimiento, lugar de nacimiento*/}
			<Row gutter={16}>
				<Col span={6}>
					<Form.Item
						label={t('birthdate')}
						name="birthdate"
						hasFeedback
						rules={[
							{
								type: 'object',
								required: true,
								message: `${t('pleace_select')} ${t('birthdate')}`,
							},
							({ getFieldValue }) => ({
								validator: validateTime,
							}),
						]}>
						<DatePicker />
					</Form.Item>
				</Col>
				<Col span={18}>
					<Form.Item
						name="nacimiento"
						label={t('place_birth')}
						hasFeedback
						rules={[
							{
								required: true,
								message: `${t('pleace')} ${t('place_birth')}`,
								whitespace: true,
							},
							{
								validator: validateLength,
							},
						]}>
						<Input />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Form.Item
					name="password"
					label="Password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
					hasFeedback>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="confirm"
					label="Confirm Password"
					dependencies={['password']}
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Please confirm your password!',
						},
						{ validator: compareToFirstPassword },
					]}>
					<Input.Password />
				</Form.Item>
			</Row>

			{/*subtmit*/}
			<Row typeof="flex" justify="end">
				<Col span={4}>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							{t('register.register')}
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

Register.propTypes = {
	form: PropTypes.any,
}

export const FormRegister = Register
