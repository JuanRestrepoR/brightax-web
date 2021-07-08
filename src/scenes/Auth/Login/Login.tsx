import * as React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormLogin } from "../components/FormLogin/FormLogin"
import './Login.scss'

export const Login = () => {

  const { t } = useTranslation();

  return (
    <div className="component-login">
      <Row>
        <Col>
          <h1>{t('login.singin')}</h1>
        </Col>
      </Row>
      <FormLogin/>
    </div>
  )
}