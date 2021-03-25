import React, { Component } from 'react'

export default function Card(props) {
    return (
        <div className="col-md-4 p-3">
            <div className="bg-dark text-light">
                <div className="row">
                    <div className="col-xs-6">
                        <img src={props.data.Image}
                            alt="" className="justify-self-center"
                            style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className="col-xs-6">
                        <div className="p-3">
                            <p className="text-warning" style={{
                                fontSize: '20px'
                            }}>{props.data.name}</p>
                            <p className="text-info">{props.data.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}