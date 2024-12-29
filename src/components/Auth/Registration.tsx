'use client'

import { useRegistrationMutation } from '@/gql/registration'
import { Button, Form, FormProps, Input, message } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { memo } from 'react'


type FieldType = {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Registration = memo(() => {
  const [messageApi, contextHolder] = message.useMessage()
  const { push } = useRouter()

  const [registrationAction, { loading }] = useRegistrationMutation({
    refetchQueries: ['me'],
    awaitRefetchQueries: true
  })
  const onFinish: FormProps<FieldType>['onFinish'] = async auth => {
    try {
      await registrationAction({
        variables: {
          auth
        }
      })
      messageApi.open({
        type: 'success',
        content: 'Регистрация прошла успешно',
      })
      push('/profile')
    } catch (error) {
      console.log('Error:', error)
      messageApi.open({
        type: 'error',
        content: 'Регистрация завершилась неудачей(',
      })
    }
  }

  return (
    <div className='flex justify-center items-center h-full'>
      {contextHolder}
      <div className='flex justify-center items-center grow md:self-stretch'>
        <div className='w-full md:w-96'>
          <div className='text-center mb-8 font-bold text-2xl'>Регистрация</div>
          <Form
            name='signIn'
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              name='email'
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input className='h-10' placeholder='Введите email...' />
            </Form.Item>
            <Form.Item<FieldType>
              name='password'
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input.Password className='h-10' placeholder='Введите пароль' />
            </Form.Item>
            <Form.Item<FieldType>
              name='confirmPassword'
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input.Password className='h-10' placeholder='Подтвердите пароль' />
            </Form.Item>
            <Form.Item className='flex justify-center'>
              <Button
                type='primary'
                htmlType='submit'
                className='h-12'
                loading={loading}
                disabled={loading}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
          <div className='h-[1px] bg-slate-300 my-8' />
          <div className='text-center mb-4 font-bold text-2xl'>
            Есть аккаунт?
          </div>
          <div className='flex justify-center'>
            <Link href='/auth/sign-in' className='rounded-lg border px-4 py-2 bg-orange-500 text-white'>Войти</Link>
          </div>
        </div>
      </div>
    </div>
  )
})