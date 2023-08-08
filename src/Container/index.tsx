import React, { useMemo, FC, memo } from 'react';
import Css from './Container.module.less';
import { ContainerProps, ContainerStyle } from './interface';

export const Container: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    if (!type && type !== 'style') {
      return ""
    }
    return Css["style"] as any;
  }, [type]);
  const containerSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '100%',
      // height: '40px',
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className={containerStyle}
      style={containerSize as any}
    >
      {children}
    </div>
  );
});
export const Header: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const headerSize = useMemo(() => {
    var size: ContainerStyle = {
      // width: '100px',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className={Css.header}
      style={headerSize as any}
    >
      {children}
    </div>
  );
});
export const Aside: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const asideSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '200px',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className={Css.aside}
      style={asideSize as any}
    >
      {children}
    </div>
  );
});
export const Main: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const mainSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '100%',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className={Css.main}
      style={mainSize as any}
    >
      {children}

    </div>
  );
});
export const Footer: FC<ContainerProps> = memo((props) => {
  const { type, width, height, children } = props;
  const containerStyle = useMemo(() => {
    return type as any;
  }, [type]);
  const footerSize = useMemo(() => {
    var size: ContainerStyle = {
      width: '100%',
      // height: '40px',
    };

    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className={Css.footer}
      style={footerSize as any}
    >
      {children}
    </div>
  );
});

