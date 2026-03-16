import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import Video from '../../components/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import {
   getPopularVideos,
} from '../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

const HomeScreen = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])

   const { videos, loading, nextPageToken } = useSelector(
      state => state.homeVideos
   )

   const fetchData = () => {
      dispatch(getPopularVideos())
   }

   return (
      <Container>

         <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={!!nextPageToken}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
            {!loading ? (
               videos.length > 0 ? (
                  videos.map(video => (
                     <Col lg={3} md={4} key={video.id?.videoId || video.id}>
                        <Video video={video} />
                     </Col>
                  ))
               ) : (
                  <h2 className='text-center text-white w-100 mt-5'>
                     No educational videos found.
                  </h2>
               )
            ) : (
               [...Array(20)].map((_, i) => (
                  <Col lg={3} md={4} key={i}>
                     <SkeletonVideo />
                  </Col>
               ))
            )}
         </InfiniteScroll>
      </Container>
   )
}

export default HomeScreen
