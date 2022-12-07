import { MenuList } from '@material-ui/core'
import React from 'react'
import {ResponsiveMenu} from 'material-ui-responsive-menu'


export default {
    MenuItems:[
    {
      text: 'test1',
      icon: undefined,
      tooltip: 'test1',
      onTouchTap: ()=>{console.log('test1')}
    },
    {
      text: 'test2',
      tooltip:'test2',
      onTouchTap: ()=>{console.log('test2')}
    },
    {
      text: 'test3',
      tooltip:'test2',
      onTouchTap: ()=>{console.log('test2')}
    }
  ]
}