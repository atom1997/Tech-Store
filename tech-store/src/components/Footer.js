import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
export default function Footer() {
    return (<ProductConsumer>
        {value => {
            return<FootWrapper>
                <div className="contanier py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-capitalize"> copyright
                            &copy; tech-store {new Date().getFullYear()}.
                            all rights reserved{" "}
                            </p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-around">
                            {value.SocialIcons.map(item => (
                                <a href={item.url} key={item.id}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
           </FootWrapper>
        }}
    </ProductConsumer>
    )
}

const FootWrapper = styled.footer`
background: var(--darkGrey);
color:var(--mainWhite);
.icon{
    font-size: 1.5rem;
    color:var(--mainWhite);
    transition:var(--mianTranstion);
}
.icon:hover{
    color:var(--primaryColor);
    cursor: pointer;
}
`;