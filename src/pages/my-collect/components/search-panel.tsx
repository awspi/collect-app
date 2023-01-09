import { Card, Tag } from 'antd'
import React from 'react'

export default function SearchPanel() {
  const tags=[]
  //
  const handleChange=()=>{

  }

  return (
    <Card style={{marginBottom:20}}>
    <div style={{
      display:'flex'
    }}>
      <span style={{ marginRight: 8 }}>:</span>
      {/* {tagsData.map((tag) => (
        <Tag.CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </Tag.CheckableTag>
      ))} */}
    search
    </div>
  </Card>
  )
}
