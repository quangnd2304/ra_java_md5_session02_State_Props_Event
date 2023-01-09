import React, { Component } from 'react';

class ChildrenClassComp extends Component {
    // Khởi tạo state ở trong constructor
    constructor() {
        //Gọi constructor của lớp cha
        super();
        // Khởi tạo bằng this.state = {}
        this.state = {
            studentA: "Nguyễn Thị Minh Thoa",
            studentB: "Nguyễn Văn Khánh",
            address: {
                city: 'Hà Nội',
                district: "HBT"
            }
        }
    }
    handleChangeStudent = () => {
        //Cập nhật state --> setState
        this.setState({
            studentB: "Đặng Minh Tiệp"
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.companyName} xin chào các bạn {this.props.children}</h2>
                <p>Bạn {this.state.studentA} rất xinh</p>
                <p>Bạn {this.state.studentB} rất đẹp zai</p>
                <p>Thành phố {this.state.address.city}</p>
                <button onClick={this.handleChangeStudent}>Change Student</button>
            </div>
        );
    }
}

export default ChildrenClassComp;