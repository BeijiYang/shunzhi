import React, { Component } from 'react'
import  Settings  from '../../../settings'

import { Form, Input, Button, Icon,  message, Upload } from 'antd'
import './new-dish.css'

import axios from 'axios'


const FormItem = Form.Item

// https://ant.design/components/upload-cn/

class NewDish extends Component {
  handleSubmit = (e) => {
    e.preventDefault()

    let formData =  this.props.form.getFieldsValue()
    let unFilled = Object.keys(formData).filter(
      prop => {
         return (!formData[prop])
      }
    )

    if(unFilled.length === 0) {
      const name = formData.name
      const desc = formData.desc
      const price = formData.price
      const poster = formData.poster

      const data = { name, poster, price, desc }
      console.log('....xxx', data)
      axios.post(`${Settings.host}/dish`, data)
        .then( res => {
          message.info('添加菜品成功');
        })
        .catch( (error) => {
          let errMesg = error.response.data.error
          alert(errMesg)
        })
      this.props.form.resetFields()
    }else {
      alert("请填入全部信息")
    }
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render = () => {
    const props2 = {
      action: 'http://localhost:3008/dish/poster',
      name: 'poster',
      listType: 'picture',
      className: 'upload-list-inline',
    };



    const { getFieldDecorator, getFieldsError } = this.props.form;
    const config = {
      rules: [{ type: 'string', required: true, message: '必填项目' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

    return (
    <div className='single page'>
    <div className='white-block details'>
    <Form onSubmit={this.handleSubmit} className='signup-form'>
      <FormItem>
        {getFieldDecorator('name', config)(
        <Input prefix={<Icon type='user' style={{ fontSize: 14 }} />}
        placeholder='名称'
        type='text'
        name='name' />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('desc', config)(
        <Input prefix={<Icon type='lock' style={{ fontSize: 14 }} />}
        placeholder='描述'
        type='text'
        name='desc'
        />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('price', config)(
        <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 14 }} />}
        placeholder='价格'
        type='text'
        name='price' />
        )}
      </FormItem>

      <FormItem>
        <Button type='primary' htmlType='submit' disabled={this.hasErrors(getFieldsError())} className='signup-form-button'>添加账户</Button>
      </FormItem>
    </Form>

    <Upload {...props2} >
      <Button>
       <Icon type="upload" /> upload
     </Button>
   </Upload>
  </div>
</div>
  )}
}

NewDish = Form.create({})(NewDish)

export default NewDish
