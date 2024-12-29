'use client'

import { useGetRecipeByUrl } from '@/hooks'
import { InputNumber, InputNumberProps, Table, TableProps } from 'antd'
import { memo, useMemo, useState } from 'react'

export const RecipeIngredient: React.FC = memo(() => {
  const recipe = useGetRecipeByUrl()
  const [portion, setPortion] = useState<number>(1)

  const onChange: InputNumberProps['onChange'] = value => {
    setPortion(Number(value))
  }

  const columns: TableProps['columns'] = useMemo(() => [
    {
      dataIndex: 'ingredient',
      render: value => value.title
    },
    {
      dataIndex: 'value',
      render: (_, v) => (v?.value ? <>{+v.value * portion} {v.note}</> : v.note),
      align: 'right'
    }
  ], [portion])

  if (!recipe?.ingredients?.length) {
    return null
  }

  return (
    <div className='mt-4'>
      <div className='flex justify-between items-center'>
        <h3 className='inline-block text-xl rounded-md font-bold'>Ингредиенты</h3>
        <div className='flex items-center'>
          <div className='mr-2 text-sm'>Порций:</div>
          <InputNumber
            defaultValue={portion}
            onChange={onChange}
            className='h-8'
            style={{ width: 60 }}
            min={1}
          />
        </div>
      </div>
      <Table
        rowKey='id'
        showHeader={false}
        dataSource={recipe?.ingredients}
        columns={columns}
        pagination={false}
        size='small'
        className='mt-2'
      />
    </div>
  )
})