<template>
    <div class="card-post">
        <!-- need to get note-key(id) and route. -->
        <div class="square"><router-link to="/read-note">
            <div class="board-info">
                <a class="entry">#1</a>
                <a class="range">1~72p</a>
            </div>
            <div class="representative">
                <div class="title">Avada Kedavra</div>
                <div class="post-info">
                    <!-- local date format -->
                    <a class="date">4 JUN 2020</a><br>
                    <!-- view icon -->
                    <img class="icon" id="eye" src="../assets/view.png"/>
                    <a class="view">1312</a>
                    <!-- up icon -->
                    <img class="icon" id="thumbs" src="../assets/thumbs.png"/>
                    <a class="up">87</a>
                </div>
            </div>
            <div class="content-box">
                <p class="content">Harry Potter's parents were killed by "You Know Who", but Harry survived. Sonyun Punch was so strong. Dododongha fainted away by Sonyun Punch. Hwang Chairin's Jungchiryuk is global No.1. Black Seo Sonyun sent E-mail to blaim Dododongha</p>
                <!-- change author name -->
                <a class="author">by Juho Kim</a>
            </div>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    .card-post {
        display: flex;
        justify-content: center;
        padding: 80px;
    }
    .square {
        width: 800px;
        height: 200px;
        background: #fff;
        border-radius: 30px;
        box-shadow: 0px 20px 50px #D9DBDF;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease; 
    }

    .square:hover {
        -webkit-transform: translate(20px, -10px);
        -ms-transform: translate(10px, -10px);
        transform: translate(10px, -10px);
        -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    }

    .board-info {
        margin: auto;
        padding-top: 20px;
        border-radius: 30px 30px 0px 0px;
        width: 740px;
        position: absolute;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 10px;
        background-color: #f37022;
    }

    .board-info > a{
        font-size: 25px;
        color:#fff;
    }

    .entry {
        float: left;
    }

    .range {
        float: right;
    }

    .representative {
        margin: auto;
        width: 740px;
        margin-top: 70px;
        padding-left: 30px;
        padding-right: 30px;
        position: absolute;
    }

    .post-info {
        float: right;
        position: relative;
    }

    .post-info > a {
        font-size: 15px;
        color: #cbcbcb;
    }

    #eye {
        position: relative;
        top: 3.5px;
        height: 16.8px;
        right: 10px;
    }

    #thumbs {
        position: relative;
        top: 2.3px;
        height: 15px;
        right: 3px;
    }

    .title {
        float: left;
        text-align: left;
        font-size: 25px;
        color: #3a3a3a;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .view {
        position:relative;
        right: 8px;
    }
    .content-box {
        width: 740px;
        padding-left: 30px;
        padding-right: 30px;
        margin: auto;
        margin-top: 110px;
        position: absolute;
    }

    .content {
        text-align: justify;
        font-size: 15px;
        color: #cbcbcb;
        line-height: 20px;
        margin-bottom: 8px;
        max-height: 40px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

    .author {
        float: left;
        text-align: justify;
        font-size: 15px;
        text-decoration: none;
        color: #3a3a3a;
    }

    /* .read-more {
        float: right;
        background-color: #f37022;
        color: #fff;
        width: 130px;
        text-decoration: none;
        text-align: center;
        border-radius: 10px;
        border-width: 0px;
        font-size: 15px;
        padding: 10px 18px;
        cursor: pointer;
        outline: none;
        position: absolute;
    } */

</style>