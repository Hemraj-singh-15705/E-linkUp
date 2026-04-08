import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import { Helmet } from 'react-helmet'
import {
   getRelatedVideos,
   getVideoById,
} from '../../redux/actions/videos.action'
import './watchScreen.scss'

const WatchScreen = () => {
   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideoById(id))

      dispatch(getRelatedVideos(id))
   }, [dispatch, id])

   const { videos, loading: relatedVideosLoading } = useSelector(
      state => state.relatedVideos
   )

   const { video, loading } = useSelector(state => state.selectedVideo)

   return (
      <Row>
         <Helmet>
            <title>{video?.snippet?.title}</title>
         </Helmet>
         <Col lg={8} xl={9}>
            <div className='watchScreen__player'>
               <iframe
                  src={`https://www.youtube.com/embed/${id}?controls=1&rel=0&modestbranding=1&iv_load_policy=3&autoplay=1`}
                  frameBorder='0'
                  title={video?.snippet?.title}
                  allowFullScreen
                  width='100%'
                  height='100%'></iframe>
            </div>
            {!loading ? (
               <VideoMetaData video={video} videoId={id} />
            ) : (
               <h6>Loading...</h6>
            )}
         </Col>
         <Col lg={4} xl={3}>
            {!loading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )}
         </Col>
      </Row>
   )
}

export default WatchScreen
