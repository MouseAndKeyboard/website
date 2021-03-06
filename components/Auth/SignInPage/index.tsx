/** @jsx jsx */
import { jsx } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import { useState } from 'react'
import { Auth } from 'aws-amplify'
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import Link from 'next/link'
import Router from 'next/router'
import Title from '../../Utils/Title'
import { phemeLogin } from '../../../helpers/phemeLogin'
import UWAStudent from './UWAStudent'
import OtherMember from './OtherMember'
import { styles } from './styles'

const SignInPage = (props: { theme: Object }) => {
  const [isUWAStudent, setIsUWAStudent] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')

  const closeError = () => setErrors('')

  const handleSubmit = async values => {
    setLoading(true)
    const data = {
      username: values.email,
      password: values.password
    }
    try {
      if (isUWAStudent) {
        const phemeResponse = await phemeLogin(
          values.studentNumber,
          values.password,
          `${process.env.PHEME_URL}api/login`,
          process.env.PHEME_TOKEN
        )

        // eslint-disable-next-line
        if (!phemeResponse.success) throw { message: phemeResponse.message }

        // reassign data to use values fetched from pheme login
        data.username = `${values.studentNumber}@student.uwa.edu.au`
        data.password = `${values.studentNumber}${process.env.PHEME_SALT}`
      }
      const response = await Auth.signIn(data.username, data.password)
      // console.log(response)
      Router.push('/dashboard')
    } catch ({ code, message }) {
      if (code === 'UserNotConfirmedException') {
        setErrors(
          'To login into Coders for Causes, please click on the verification link sent to your email and try again.'
        )
      }
      setErrors(
        message ||
          'An unexpected error occurred. Please refresh the page and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div css={styles(props.theme)}>
      <Title typed>./sign-in</Title>
      <Container className='py-5 '>
        <Row>
          <Col xs={12} tag='p'>
            Don't have an account? Create one&nbsp;
            <Link href='/signup'>
              <a>here</a>
            </Link>
            !
          </Col>
          <Col md={6}>
            <Nav tabs className='border-0'>
              <NavItem className='mr-2'>
                <NavLink
                  className={`signin-tab rounded-0 ${
                    isUWAStudent && 'border-primary'
                  }`}
                  onClick={() => setIsUWAStudent(true)}
                >
                  UWA Student
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`signin-tab rounded-0 ${
                    !isUWAStudent && 'border-primary'
                  }`}
                  onClick={() => setIsUWAStudent(false)}
                >
                  Email Sign-in
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={isUWAStudent ? 1 : 2}>
              <TabPane tabId={1} className='pt-3'>
                <UWAStudent
                  loading={loading}
                  error={errors}
                  closeError={closeError}
                  handleSubmit={handleSubmit}
                />
              </TabPane>
              <TabPane tabId={2} className='pt-3'>
                <OtherMember
                  loading={loading}
                  error={errors}
                  closeError={closeError}
                  handleSubmit={handleSubmit}
                />
              </TabPane>
            </TabContent>
          </Col>
          <Col
            md={{ size: 5, offset: 1 }}
            className='d-none d-md-flex align-items-center'
          >
            <img
              src='/illustrations/sign_in.svg'
              alt='Coder Coding'
              className='img-fluid'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withTheme(SignInPage)
