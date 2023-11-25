import schema2component from "@/utils/schema2component";

const schema = {
  type: "page",
  title: "就诊记录",
  body: {
    type: "crud",
    api: "http://4im9ea.natappfree.cc/admin/medicalVisit/lists",
    headerToolbar: [
      {
        label: "新增",
        type: "button",
        actionType: "dialog",
        level: "primary",
        dialog: {
          title: "新增",
          body: {
            type: "form",
            api: {
              method: "post",
              url: "http://4im9ea.natappfree.cc/admin/medicalVisit",
            },
            body: [
              {
                type: "input-datetime",
                name: "visitTime",
                label: "就诊时间",
                format: "YYYY-MM-DD HH:mm:ss",
                required: true,
              },
              {
                type: "input-number",
                name: "elderlyId",
                label: "老人ID",
                required: true,
              },
              {
                type: "input-text",
                name: "accompanyingPerson",
                label: "陪同人员",
              },
              {
                type: "input-text",
                name: "doctorName",
                label: "医生姓名",
              },
              {
                type: "select",
                name: "isOutstandingPayment",
                label: "是否有未结账款",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 },
                ],
                required: true,
              },
              {
                type: "textarea",
                name: "diagnosisResult",
                label: "诊断结果",
              },
              {
                type: "select",
                name: "visitType",
                label: "就诊类型",
                options: [
                  { label: "住院", value: "Inpatient" },
                  { label: "门诊", value: "Outpatient" },
                ],
                required: true,
              },
              {
                type: "textarea",
                name: "remarks",
                label: "备注",
              },
            ],
          },
        },
        id: "u:b5b400a07950",
      },
      "bulkActions",
    ],
    filter: {
      debug: true,
      title: "搜索",
      body: {
        type: "input-text",
        name: "elderlyName",
        label: "老人姓名",
        clearable: true,
        size: "sm",
      },
      actions: [
        {
          type: "reset",
          label: "重置",
        },
        {
          type: "submit",
          level: "primary",
          label: "查询",
        },
      ],
    },
    columns: [
      {
        name: "visitId",
        label: "就诊记录ID",
      },
      {
        name: "name",
        label: "老人姓名",
      },
      {
        name: "visitTime",
        label: "就诊时间",
      },
      {
        type: "operation",
        label: "操作",
        buttons: [
          {
            label: "详情",
            type: "button",
            level: "link",
            actionType: "dialog",
            dialog: {
              title: "查看详情",
              body: {
                initApi: {
                  method: "get",
                  url: "http://4im9ea.natappfree.cc/admin/medicalVisit",
                  // 这里假设您的API需要就诊记录的ID来获取详情
                  data: {
                    visitId: "${visitId}",
                  },
                },
                type: "form",
                // 在这里添加 api 属性来获取详细信息
                body: [
                  {
                    type: "static",
                    name: "visitId",
                    label: "就诊记录ID",
                  },
                  {
                    type: "static",
                    name: "name",
                    label: "老人姓名",
                  },
                  {
                    type: "static",
                    name: "visitTime",
                    label: "就诊时间",
                  },
                  {
                    type: "static",
                    name: "accompanyingPerson",
                    label: "陪同人员",
                  },
                  {
                    type: "static",
                    name: "doctor_name",
                    label: "医生姓名",
                  },
                  {
                    type: "static",
                    name: "is_outstandingPayment",
                    label: "是否有未结账款",
                  },
                  {
                    type: "static",
                    name: "diagnosisResult",
                    label: "诊断结果",
                  },
                  {
                    type: "static",
                    name: "visitType",
                    label: "就诊类型",
                  },
                  {
                    type: "static",
                    name: "remarks",
                    label: "备注",
                  },
                ],
              },
            },
          },
          {
            label: "删除",
            type: "button",
            actionType: "ajax",
            level: "danger",
            confirmText: "确认要删除？",
            api: "delete:http://4im9ea.natappfree.cc/admin/medicalVisit/${visitId}",
          },
        ],
      },
    ],
  },
};

export default schema2component(schema);
