import React, { Component } from "react";
import "./navlink.css"

export default class Product extends Component{
    data=[
        ['react',500],
        ['React native',650],
        ['Node.js',450],
        ['MongoDB',300],
        ['Express.js',650]
    ]
    render(){
        return(
            <table border="1">
                <tr><th>ชื่อ</th><th>ราคา</th></tr>
                {
                    this.data.map(d=>
                        {
                            return<tr><td>{d[0]}</td><td>{d[1]}</td></tr>
                        })
                }
            </table>
        )
    }
}