import React, { useState } from "react";
import { Form, Select, Upload, message, Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Submission = () => {
  const { Option } = Select;
  const [isAttached, setIsAttached] = useState(false);
  const [fileList, setFileList] = useState([]);

  const props = {
    beforeUpload: (file) => {
      const allowedExtensions = ['.go', '.rs', '.c', '.cpp', '.js', '.ts', '.py'];
      const fileName = file.name.toLowerCase();
      const isAllowed = allowedExtensions.some(ext => fileName.endsWith(ext));
      
      // Clear the fileList before uploading a new file
      setFileList([]);

      if (!isAllowed) {
        message.error(`${file.name} is in an unsupported format!`);
      } else {
        setFileList([file]); // Save the latest file
      }
      return isAllowed || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  
  const onFinish = (values) => {
    console.log("Received values:", values);
    // You can access the selected file using fileList state: fileList[0]
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return localStorage.getItem("jwt") ? (
    <Form name="form" onFinish={onFinish} initialValues={{ method: "file" }}>
      <Form.Item
        name="Language"
        label="Language"
        rules={[{ required: true }]}
      >
        <Select placeholder="Select a programming language">
          <Option value="javascript">JavaScript</Option>
          <Option value="python">Python</Option>
          <Option value="java">Java</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="method"
        label="Method"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="You can either attach a file or use inbuilt code editor."
      >
        <Select defaultValue="code" onChange={(value) => setIsAttached(value === 'file')}>
          <Option value="code">Code Editor</Option>
          <Option value="file">Attach File</Option>
        </Select>
        {isAttached ? (
          <Upload name="logo" action="/upload.do" listType="text" fileList={fileList} {...props}>
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        ) : (
          <Input.TextArea rows={4} placeholder="Enter your code here" />
        )}
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <h1>Sign in to Submit Solution</h1>
  );
};

export default Submission;
