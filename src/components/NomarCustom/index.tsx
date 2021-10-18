import React, { FC, useState } from 'react';
import { Rule } from 'rc-field-form/es/interface';
import classnames from 'classnames';
import Field from '../Field';
import Title from '../Title';
import './index.less';

interface INomarCustomPorps {
  fieldProps: string;
  title: string;
  positionType?: 'horizontal' | 'vertical';
  required?: boolean;
  hasStar?: boolean;
  rules?: Rule[];
  onChange?: (currentActiveLink: any) => void;
  customDomProps?: any;
  CustomDom: any;
  subTitle?: string | React.ReactNode;
  hidden?: boolean;
  extra?: string | React.ReactNode;
  defaultValue?: string;
  titleProps?: any;
  formFlag?: boolean;
}

const DformCustom: FC<INomarCustomPorps> = (props) => {
  const {
    defaultValue,
    fieldProps,
    required = false,
    rules = [],
    title,
    CustomDom,
    customDomProps,
    titleProps,
    formFlag = false
  } = props;

  const dom = () => (
    <Field
      name={fieldProps}
      rules={[{ required, message: `请选择${title}` }, ...rules]}
      initialValue={defaultValue}
      formFlag={formFlag}
    >
      <CustomDom {...customDomProps} />
    </Field>
  );

  return (
    <Title
      independentProps={{ positionType: 'vertical', ...props }}
      formFlag={formFlag}
      {...titleProps}
    >
      <div
        className={classnames({
          // 'alitajs-dform-dom': true,
          'alitajs-dform-vertical-dom': true,
        })}
      >
        {dom()}
      </div>
    </Title>
  );
};

DformCustom.displayName = 'dformCustom';
export default DformCustom;
