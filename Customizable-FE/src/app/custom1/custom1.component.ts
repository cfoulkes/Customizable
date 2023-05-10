import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularJsonFormModule } from 'angular-json-form';

@Component({
  selector: 'app-custom1',
  standalone: true,
  imports: [CommonModule, AngularJsonFormModule],
  templateUrl: './custom1.component.html',
  styleUrls: ['./custom1.component.scss'],
})
export class Custom1Component {
  form: any = {
    title: "Title From Header",
    text: "Example text description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta dolor ipsam iure. Corporis, tenetur eaque commodi deserunt modi dignissimos nostrum rem velit nihil accusamus debitis, reiciendis aperiam repudiandae asperiores.",
    groups: [
      {
        fields: [
          {
            name: "hiddenname",
            type: "hidden",
            value: 1,
          },
        ],
      },
      {
        fields: [
          {
            name: "textname",
            type: "text",
            label: "Text",
            value: "Example Text",
            required: true,
          },
        ],
      },
      // {
      //   fields: [
      //     {
      //       name: "emailname",
      //       type: "email",
      //       label: "E-Mail",
      //       value: "exampleemail@mail.com",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "telname",
      //       type: "tel",
      //       label: "Tel",
      //       value: "(12) 34567-8912",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "text2name",
      //       type: "text",
      //       label: "Text Inline Left",
      //       required: true,
      //     },
      //     {
      //       name: "text3name",
      //       type: "text",
      //       label: "Text Inline center",
      //     },
      //     {
      //       name: "text4name",
      //       type: "text",
      //       label: "Text Inline Right",
      //     },
      //     {
      //       name: "text4namex",
      //       type: "text",
      //       label: "Text Inline Right x",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "textdisabledname",
      //       type: "text",
      //       label: "Text Disabled",
      //       disabled: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "passwordname",
      //       type: "password",
      //       label: "Password",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "numbername",
      //       type: "number",
      //       label: "Number",
      //       value: 100,
      //     },
      //     {
      //       name: "numberminname",
      //       type: "number",
      //       label: "Number Min Value 50",
      //       min: 50,
      //     },
      //     {
      //       name: "numbermaxname",
      //       type: "number",
      //       label: "Number Max Value 50",
      //       max: 50,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "datename",
      //       type: "date",
      //       label: "Date",
      //       value: "2022-06-10",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "daterangename",
      //       type: "date",
      //       label: "Date",
      //       range: true,
      //       value: ["2022-06-10", "2023-05-11"],
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "checkboxname",
      //       type: "checkbox",
      //       label: "CheckBox",
      //       text: "CheckBox",
      //     },
      //     {
      //       name: "checkbox2name",
      //       type: "checkbox",
      //       text: "CheckBox2",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "radioname",
      //       type: "radio",
      //       label: "Radio",
      //       options: ["Option 1", "Option 2", "Option 3"],
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "selectname",
      //       type: "select",
      //       label: "Element Select",
      //       searchable: true,
      //       required: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "selectname2",
      //       type: "select",
      //       label: "Element Select",
      //       options: ["Option 1", "Option 2", "Option 3"],
      //       searchable: true,
      //       required: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "selectdisabledname",
      //       type: "select",
      //       label: "Element Select Disabled",
      //       options: ["Option 1", "Option 2", "Option 3"],
      //       searchable: true,
      //       required: true,
      //       disabled: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "selectmultiplename",
      //       type: "select",
      //       label: "Multiple Element Select",
      //       options: ["Option 1", "Option 2", "Option 3"],
      //       multiple: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "listname",
      //       type: "list",
      //       label: "Element List",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "colorname",
      //       type: "color",
      //       label: "Color",
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "filename",
      //       type: "file",
      //       label: "File upload.",
      //       required: true,
      //     },
      //     {
      //       name: "filemultiplename",
      //       type: "file",
      //       label: "Multiple File upload.",
      //       multiple: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "imagename",
      //       type: "image",
      //       label: "Image logo. 100 KB Max Size",
      //       maxsize: 100000,
      //     },
      //     {
      //       name: "imagecovername",
      //       type: "image",
      //       label: "Image photo",
      //       cover: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "imagemultiplename",
      //       type: "image",
      //       label: "Images",
      //       multiple: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "imageurlname",
      //       type: "image",
      //       label: "Image by URL",
      //       url: true,
      //     },
      //     {
      //       name: "imagecoverurlname",
      //       type: "image",
      //       label: "Cover Image by URL",
      //       url: true,
      //       cover: true,
      //       required: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "imagesurlname",
      //       type: "image",
      //       label: "Images by URL",
      //       multiple: true,
      //       url: true,
      //       cover: true,
      //       required: true,
      //     },
      //   ],
      // },
      // {
      //   fields: [
      //     {
      //       name: "textareaname",
      //       type: "textarea",
      //       label: "Textarea",
      //       required: true,
      //     },
      //   ],
      // },
    ],
    buttons: [
      {
        text: "Submit button",
        submit: true,
      },
    ],
    format: {
      primary: "lime",
    },
  };


  send(data: any) {
    console.log('data ', data);
  }

  event(data: any) {
    console.log('event', data);
  }


}
