import React, { Component } from 'react';

class EventDemo extends Component {
    constructor() {
        super();
        this.state = {
            studentName: "Nguyễn Văn A"
        };
        // Đối với các phiên bản ReactJS từ 17 trở xuống
        // this.handleClick05 = this.handleClick05.bind(this);
    }
    //function của sự kiện không có tham số
    handleClick01() {
        console.log("Button 01 was clicked!");
    }
    handleClick02() {
        console.log("Button 02 was clicked!");
    }
    // function của sự kiện có tham số
    handleClick03 = (message) => {
        console.log(message + " was clicked");
    }

    handleClick04 = (message) => {
        console.log(message + " was clicked");
    }
    handleClick05 = () => {
        console.log("Xin chào " + this.state.studentName);
    }

    handleClickA = (event) => {
        console.log("Bạn vừa ghé thăm trang web của Rikkei Academy");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>React Event Demo</h2>
                <button onClick={this.handleClick01()}>Button 01</button>
                {/* Sự kiện không tham số --> gọi không có () */}
                <button onClick={this.handleClick02}>Button 02</button>
                <button onClick={this.handleClick03("Button 03")}>Button 03</button>
                {/* Sự kiện có tham số --> gọi theo arrow function */}
                <button onClick={() => this.handleClick04("Button 04")}>Button 04</button>
                {/* Sự kiện có sử dụng props và state --> gọi bình thường */}
                <button onClick={this.handleClick05}>Button 05</button>
                <a href='https://rikkei.edu.vn/' onClick={this.handleClickA}>Rikkei Academy</a>
            </div>
        );
    }
}

export default EventDemo;