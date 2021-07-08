import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { auth } from '../../../../services/Auth/AuthActions'

const Login = () => {
	const { login } = auth
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleSubmit = (values: any) => {
		console.log('Received values of form: ', values)
		dispatch(login(values.email, values.password))
	}
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form name="FormLogin" onFinish={handleSubmit} className="login-form" onFinishFailed={onFinishFailed}>
			{/* 

			<Row>
				<Col span={24}>
					<Form.Item
						name="password"
						label={t('password')}
						rules={[{ required: true, message: `${t('pleace')}s ${t('password')}` }]}>
						<Input type="password" />,
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col span={6}>
					<Form.Item>
						<a className="login-form-forgot" href="/">
							{t('reset_password')}
						</a>
					</Form.Item>
				</Col>
				<Col span={4} offset={14}>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							{t('continue')}
						</Button>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col span={6}>
					<Form.Item initialValue={true} valuePropName={'checked'} name="remember">
						<Checkbox>{t('remember')}</Checkbox>
					</Form.Item>
				</Col>
				<Col span={4} offset={14}>
					<Form.Item>
						<Form.Item>
							<Button type="primary" className="login-form-button" href='/register'>
								{t('register.register')}
							</Button>
						</Form.Item>
					</Form.Item>
				</Col>
			</Row> */}

			<Row>
				<Col span={24}>
					<Form.Item
						label={t('mail')}
						name="email"
						rules={[{ required: true, message: `${t('pleace')}s ${t('mail')}` }]}>
						<Input />
					</Form.Item>
				</Col>
			</Row>

			<Form.Item
				name="password"
				label={t('password')}
				rules={[{ required: true, message: `${t('pleace')}s ${t('password')}` }]}>
				<Input.Password />
			</Form.Item>

			<Form.Item initialValue={true} valuePropName={'checked'} name="remember">
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
			<Form.Item>
				<Button type="primary" className="login-form-button" href="/register">
					{t('register.register')}
				</Button>
			</Form.Item>
		</Form>
	)
}

export const FormLogin = Login
