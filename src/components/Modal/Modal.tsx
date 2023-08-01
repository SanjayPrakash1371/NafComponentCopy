/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import './Modal.scss';

interface ModalProps {
  title?: string;
  subtitle?: string;
  content?: string;
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?:() => void;
  onCancel?:() => void;
  submit?: string;
  cancel?: string;
  className?: string;
  children?: ReactNode;
  id?:string;
}

// function handleclick(): void {
//   throw new Error('Function not implemented.');
// }

export default function Modal(props: ModalProps) {
    // const outsideRef = React.useRef(null);

    // const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //   if (e.target === outsideRef.current) {
    //     props.onClose();
    //   }
    // }
    return (
        <>
            {
                props.isOpen && (
                    <div className={['naf-modal-overlay',
                        props.className ? props.className : '',
                    ].join(' ')}
                    >
                        {/* <div className="modal-overlay"  ref={outsideRef} onClick={handleCloseOnOverlay} > */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="naf-modal-box"
                        >
                            <div className="naf-modal-box__closebtn">
                                <span onClick={props.onClose}>
                                    <Icon className="naf-modal-box__closebtn--icons" icon={['fas', 'times']} />
                                </span>
                            </div>
                            <div className="m-2">
                                <header>
                                    <h1 className="naf-modal-box__header--title">{props.title}</h1>
                                    <h2 className="naf-modal-box__header--subtitle mb-3">{props.subtitle}</h2>
                                </header>
                                <main>
                                    <span className="naf-modal-box__main--content mb-4">{props.content}</span>
                                    {props.children}
                                </main>
                                <footer>
                                    <div className="naf-modal-box__fbtn">
                                        {props.cancel ? (
                                            <Button value={props.cancel} className="naf-modal-box__fbtn--btncancel mx-1" size="medium" onClick={props.onCancel} />
                                        ) : (
                                            ''
                                        )}
                                        {props.submit ? (
                                            <Button value={props.submit} className="naf-modal-box__fbtn--btnsubmit" size="medium" onClick={props.onSubmit} />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
