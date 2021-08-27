import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import BlogLayout from '../../Components/Layout/BlogLayout'
import './index.scss';
import Headings from './Headings';
import BlogItem from './BlogItem';

export class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            List: [
                {
                    id: 1,
                    title: "[Official] ইমেইল পরিবর্তন ও কিছু নতুন আপডেট।",
                    date: "3 min ago",
                    thumb: "https://via.placeholder.com/300x500",
                    author: "Mohammad Masum",
                    url: "single-blog",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 2,
                    title: "নতুন রূপে ট্রিকবিডি এর অফিশিয়াল অ্যান্ড্রয়েড অ্যাপ",
                    date: "3 min ago",
                    author: "Mohammad Masum",
                    url: "single-blog",
                    thumb: "https://via.placeholder.com/300x500",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 3,
                    title: "[Official] ট্রেইনারদের জন্য কিছু নির্দেশনা।আর্নিং পোষ্ট করার আগে অবশ্যই দেখুন।",
                    date: "3 min ago",
                    author: "Mohammad Masum",
                    url: "single-blog",
                    thumb: "https://via.placeholder.com/300x500",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 4,
                    title: "সহজেই খুজে পান ট্রিকবিডি এর সাপোর্ট টিম কে… যেকোন প্রয়োজনে আপনার পাশে :)",
                    date: "3 min ago",
                    thumb: "https://via.placeholder.com/300x500",
                    url: "single-blog",
                    author: "Mohammad Masum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 5,
                    title: "খুব সহজেই ডাউনলোড করুন আপনার ফোনের জন্যে সঠিক GCam টি। আর হন্নে হয়ে লিংক খুঁজে বেড়াতে হবেনা!",
                    date: "3 min ago",
                    thumb: "https://via.placeholder.com/300x500",
                    author: "Mohammad Masum",
                    url: "single-blog",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 6,
                    title: "ডাউনলোড করে নিন সদ্য মুক্তি পেয়েই সাড়া জাগানো বাংলাদেশী ওয়েব ফিল্ম “নেটওয়ার্কের বাইরে",
                    date: "3 min ago",
                    thumb: "https://via.placeholder.com/300x500",
                    author: "Mohammad Masum",
                    url: "single-blog",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 7,
                    title: "[Official] ট্রেইনারদের জন্য কিছু নির্দেশনা।আর্নিং পোষ্ট করার আগে অবশ্যই দেখুন।",
                    date: "3 min ago",
                    url: "single-blog",
                    thumb: "https://via.placeholder.com/300x500",
                    author: "Mohammad Masum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 8,
                    title: "আসছে গুগলের নতুন ০২টি Smartphone পিক্সেল ৬ এবং পিক্সেল ৬ প্রো",
                    date: "3 min ago",
                    url: "single-blog",
                    thumb: "https://via.placeholder.com/300x500",
                    author: "Mohammad Masum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 9,
                    title: "আপনার ছবিকে 3D Model এ Convert করুন 05 মিনিটেই",
                    date: "3 min ago",
                    url: "single-blog",
                    thumb: "https://via.placeholder.com/300x500",
                    author: "Mohammad Masum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
                {
                    id: 10,
                    title: "ফ্রি ফায়ার ব্যান! | VPN ছাড়াই GAME এ ঢুকেন | PERA NAI CHIL!!",
                    date: "3 min ago",
                    thumb: "https://via.placeholder.com/300x500",
                    url: "single-blog",
                    author: "Mohammad Masum",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nihil explicabo repellat debitis necessitatibus neque fugiat expedita perferendis ab dolorem dolor numquam eum reprehenderit cupiditate?"
                },
            ],
        }
        this.removeBlog = this.removeBlog.bind(this);
    }

    removeBlog(index){
        let { List } = this.state;
        List.splice(index, 1);
        this.setState({
            List: List
        })
    }

    render({List} = this.state) {
        // const { t  } = this.props;
        return (
            <BlogLayout>
            <div className="row">
                <div className="col-lg-12">
                    <Headings title="Bloggging" thumbs="https://via.placeholder.com/1920x1080" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi, itaque corrupti aperiam quas magni neque et deserunt reprehenderit repudiandae ab rem quaerat nulla distinctio. Voluptatibus debitis temporibus dolore eligendi reprehenderit! Placeat, eos! Provident, officiis."/>
                </div>
                
                {List.map((item, idx) => <BlogItem key={idx} item={item} removeBlog={this.removeBlog}/>)}
            </div>
            </BlogLayout>
        )
    }
}

export default withTranslation()(Blog);