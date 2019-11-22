import React, {Component} from 'react'
import {View, FlatList, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import * as act from '../_redux/_actions/posts'
import AllAct, {} from '../component/AllAct'
import Post from '../component/Post'

class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            is_fetching: false,
            Posts: []
        }
    }

    
    async componentDidMount(){
        this.onRefress()
    }

    onRefress = () => {
        this.setState({is_fetching: true})
        this.getData()
    }
 
    getData = async () => {
        await this.props.getPosts()
        this.state.Posts = this.props.posts.posts
        this.setState({Post: this.state.posts, is_fetching: false})
    }

    LikeAll = (arr) => {
        const newPosts = [...arr]
        newPosts.map(val => {
            val.like += 1
        })
        return(
            this.setState({
                Posts: newPosts
            })
        )
    }

    ResetAll = (arr) => {
        const newPosts = [...arr]
        newPosts.map(val => {
            val.like = 0
        })
        return(
            this.setState({
                Posts: newPosts
            })
        )
    }


    DislikeAll = (arr) => {
     
            const newPosts = [...arr]
            newPosts.map(val => {
                if(val.like > 0){
                    val.like -= 1
            }})
            return(
                this.setState({
                    Posts: newPosts
                })
            )
    }
    
    addLike = (arr,i) => {
      const newPost = [...arr]
      newPost[newPost.indexOf(i)].like += 1
      return(
        this.setState({
            Posts: newPost 
        })
      )
    }

    decreaseLike = (arr, i, num) => {
        if(num > 0){
            const newPost = [...arr]
            newPost[newPost.indexOf(i)].like -= 1
            return(
                this.setState({
                    posts: newPost 
                })
            )
        }
        return 
    }


    render(){

        if(this.props.posts.isLoading){
            return(
                <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                    <ActivityIndicator animating={true} size='large' />
                </View>
            )
        }
        return(
            <View>

                <AllAct like={()=> this.LikeAll(this.state.Posts)} 
                        reset={()=> this.ResetAll(this.state.Posts)} 
                        dislike={()=> this.DislikeAll(this.state.Posts)}/>

                <FlatList
                 style={{marginBottom:50}}
                 data={this.state.Posts}
                 onRefresh={()=>this.onRefress()}
                 refreshing={this.state.is_fetching}
                 renderItem={({item}) => {

                     return <Post key={item.id} 
                                  id={item.id} 
                                  image={item.image} 
                                  like={item.like} 
                                  act={()=>this.addLike(this.state.Posts,item)} 
                                  actdec={()=>this.decreaseLike(this.state.Posts,item, item.like)} />
                 }}
                 keyExtractor={(item)=> item.id}
                />
                    
            </View>
        )
       
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(act.getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
