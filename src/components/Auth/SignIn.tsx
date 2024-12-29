'use client'

import { Button, Form, FormProps, Input, message, notification } from 'antd'
import Link from 'next/link'
import { memo } from 'react'
import { Social } from './Social'
import { useSignInMutation } from '@/gql/signIn'
import { useRouter } from 'next/navigation'
import { USER_NOT_FOUND } from '@/constants'

type FieldType = {
  email: string;
  password: string;
};

export const SignIn = memo(() => {
  const [api, contextHolder] = notification.useNotification()
  const { refresh, push } = useRouter()

  const [signInAction] = useSignInMutation({
    refetchQueries: ['me'],
    awaitRefetchQueries: true
  })
  const onFinish: FormProps<FieldType>['onFinish'] = async (variables: FieldType) => {
    try {
      const { data } = await signInAction({ variables })
      // if (data?.signIn) {
      //   location.replace('/')
      // }
      // refresh()
      push('/')
    } catch (error) {
      console.log('Error:', error)
      if (error instanceof Error && error?.message === USER_NOT_FOUND) {
        api.error({
          message: 'Внимание',
          description: 'Пользователь не найден',
          placement: 'topRight'
        })
      }
    }
  }

  return (
    <div className='flex justify-center items-center h-full'>
      {contextHolder}
      <div className='flex justify-center items-center grow md:self-stretch'>
        <div className='w-full md:w-96'>
          <div className='text-center mb-8 font-bold text-2xl'>Войти</div>
          <Social />
          <div className='h-[1px] bg-slate-300 my-8' />
          <Form
            name='signIn'
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              name='email'
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input className='h-10' />
            </Form.Item>

            <Form.Item<FieldType>
              className='!mb-0'
              name='password'
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input.Password className='h-10' />
            </Form.Item>
            <Form.Item className='flex justify-end mt-0'>
              <Link href='#' className='text-right'>Забыли пароль?</Link>
            </Form.Item>
            <Form.Item className='flex justify-center'>
              <Button
                type='primary'
                htmlType='submit'
                className='h-12'
              >
                Войти
              </Button>
            </Form.Item>
          </Form>
          <div className='h-[1px] bg-slate-300 my-8' />
          <div className='text-center mb-4 font-bold text-2xl'>
            У вас нет учетной записи?
          </div>
          <div className='flex justify-center'>
            <Link href='/auth/registration' className='rounded-lg border px-4 py-2 bg-orange-500 text-white'>Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  )
})