import schema2component from "@/utils/schema2component";

const schema = {
  type: "page",
  remark: null,
  name: "page-demo",
  body: [
    {
      type: "page",
      body: [
        {
          type: "wizard",
          api: "/admin/into/register",
          steps: [
            {
              title: "第一步",
              body: [
                {
                  type: "input-text",
                  label: "姓名",
                  name: "name",
                  placeholder: "请输入姓名",
                },
                {
                  type: "input-number",
                  label: "年龄",
                  name: "age",
                  placeholder: "请输入年龄",
                },
                {
                  type: "input-text",
                  label: "婚姻情况",
                  name: "marriage",
                  placeholder: "请输入婚姻情况",
                },
                {
                  type: "select",
                  name: "sex",
                  label: "性别",
                  inline: true,
                  options: [
                    {
                      label: "男",
                      value: "男",
                    },
                    {
                      label: "女",
                      value: "女",
                    },
                  ],
                },
                {
                  type: "input-text",
                  label: "身份证号",
                  name: "idcard",
                  placeholder: "请输入身份证号",
                },
                {
                  type: "input-text",
                  label: "民族",
                  name: "nation",
                  placeholder: "请输入民族",
                },
                {
                  type: "input-text",
                  label: "文化程度",
                  name: "education",
                  placeholder: "请输入文化程度",
                },
                {
                  type: "input-text",
                  label: "工作单位",
                  name: "company",
                  placeholder: "请输入工作单位",
                },
                {
                  type: "input-text",
                  label: "家庭住址",
                  name: "home",
                  placeholder: "请输入家庭住址",
                },
                {
                  type: "input-text",
                  label: "联系电话",
                  name: "phone",
                  placeholder: "请输入联系电话",
                },
                {
                  type: "input-text",
                  label: "医保情况",
                  name: "medicalensurance",
                  placeholder: "请输入医保情况",
                },
                {
                  type: "input-text",
                  label: "病史",
                  name: "medicalhistory",
                  placeholder: "请输入病史",
                },
                {
                  type: "input-text",
                  label: "饮食习惯",
                  name: "eatinghabits",
                  placeholder: "请输入饮食习惯",
                },
              ],
            },
            {
              title: "第二步",
              body: [
                {
                  type: "input-text",
                  name: "mname",
                  placeholder: "张三",
                  label: "主托养人姓名：",
                },
                {
                  type: "input-text",
                  name: "mrelationship",
                  placeholder: "请输入",
                  label: "主托养人关系：",
                },
                {
                  type: "input-number",
                  showSteps: false,
                  name: "midcard",
                  placeholder: "请输入",
                  label: "主托养人身份证号：",
                },
                {
                  type: "input-text",
                  name: "mcompany",
                  placeholder: "请输入",
                  label: "主托养人工作单位：",
                },
                {
                  type: "input-text",
                  name: "maddress",
                  placeholder: "请输入",
                  label: "主托养人家庭住址：",
                },
                {
                  type: "input-number",
                  showSteps: false,
                  name: "mphonenum",
                  placeholder: "请输入",
                  label: "主托养人联系电话：",
                },
                {
                  type: "input-text",
                  name: "dname",
                  placeholder: "张三",
                  label: "副托养人姓名：",
                },
                {
                  type: "input-text",
                  name: "drelationship",
                  placeholder: "请输入",
                  label: "副托养人关系：",
                },
                {
                  type: "input-number",
                  showSteps: false,
                  name: "didcard",
                  placeholder: "请输入",
                  label: "副托养人身份证号：",
                },
                {
                  type: "input-text",
                  name: "dcompany",
                  placeholder: "请输入",
                  label: "副托养人工作单位：",
                },
                {
                  type: "input-text",
                  name: "daddress",
                  placeholder: "请输入",
                  label: "副托养人家庭住址：",
                },
                {
                  type: "input-number",
                  showSteps: false,
                  name: "dphonenum",
                  placeholder: "请输入",
                  label: "副托养人联系电话：",
                },
                {
                  type: "input-text",
                  name: "things",
                  placeholder: "请输入",
                  label: "随行物品：",
                },
                {
                  type: "textarea",
                  name: "comments",
                  label: "备注",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default schema2component(schema);
