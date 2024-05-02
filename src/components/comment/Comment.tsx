'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ItemType } from '@/api/enum';
import { createComment, deleteComment, getCommentList, like } from '@/api/social/social-api';
import { timeAgo } from '@/utils/tool';
import { Box, IconButton, Link, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Popover } from '@mui/material';
import { IoMdMore } from "react-icons/io";
import { error } from 'console';

type ExpandedComments = Record<number, boolean>;

type CommentProps = {
  id: number,
  itemType: ItemType
}

const Comment: React.FC<CommentProps> = ({ id, itemType }) => {
  const [expandedCommentId, setExpandedCommentId] = React.useState<ExpandedComments>({});
  const [newComment, setNewComment] = React.useState('');
  const [items, setItems] = React.useState<CommentListView[]>([]);
  const [replyText, setReplyText] = React.useState<string>('');
  const [selectedCommentId, setSelectedCommentId] = React.useState<number | null>(null);
  const [isHovered, setIsHovered] = React.useState<{ [key: number]: boolean }>({});
  const [moreAnchorEl, setMoreAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [selectedCommentToDelete, setSelectedCommentToDelete] = React.useState<number | null>(null);

  // 发布评论
  const handleCreateComment = async (req: CommentCreateReq) => {
    try {
      await createComment(req)
      await handleGetCommentList()
    } catch (err) {
      console.log(err)
    }
  }

  // 获取评论
  const handleGetCommentList = async (pageNum = 1, pageSize = 10) => {
    try {
      const commentReq: CommentListReq = {
        commentItemType: itemType,
        commentItemId: id,
        pageNum: pageNum,
        pageSize: pageSize
      }
      const response = await getCommentList(commentReq)
      const data = response.data
      setItems(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    handleGetCommentList()
  }, [])


  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(event.target.value);
  };

  const handlePublishReply = (topId: number, parentUserId: number) => {
    console.log('Publishing reply:', replyText, 'to comment id:', topId);
    // Add reply
    const req: CommentCreateReq = {
      commentItemId: id,
      commentItemType: itemType,
      parentUserId: parentUserId,
      topId: topId,
      content: replyText
    }
    handleCreateComment(req)
    setReplyText('');
    setSelectedCommentId(null);
  };

  const handleExpandClick = (commentId:number) => {
    setExpandedCommentId((prevExpanded) => ({
      ...prevExpanded,
      [commentId]: !prevExpanded[commentId]
    }));
  };

  const handleCommentChange = (event: any) => {
    setNewComment(event.target.value);
  };

  const handlePublish = async () => {
    // Add logic to publish new comment
    console.log('Publishing comment:', newComment);
    if (newComment == "") {
      throw new Error("输入不能为空")
    }
    const req: CommentCreateReq = {
      commentItemId: id,
      commentItemType: itemType,
      parentUserId: 0,
      topId: 0,
      content: newComment
    }
    handleCreateComment(req)
    setNewComment(''); // Clear comment field after publishing
  };

  const handleCancel = () => {
    // Clear comment field
    setNewComment('');
  };

  // 点赞评论
  const handleLike = async (commentId: number, likedStatus: boolean) => {
    try {
      const req: LikeReq = {
        itemType: ItemType.COMMENT,
        itemId: commentId,
        likedStatus: likedStatus
      }
      await like(req)
      await handleGetCommentList()
    } catch (err) {
      console.log(err)
    }
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>, commentId: number) => {
    setMoreAnchorEl(event.currentTarget);
    setSelectedCommentToDelete(commentId);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
    setSelectedCommentToDelete(null);
  };

  // 删除评论
  const handleDeleteComment = async (commentId: number) => {
    // 调用删除评论的函数
    console.log('Deleting comment with id:', commentId);
    try {
      const req: CommentDeleteReq = {
        id: commentId
      }
      await deleteComment(req)
    } catch (err) {
      console.log(err)
    }
    await handleGetCommentList()
    handleMoreClose(); // 关闭更多选项菜单
  };

  const isMoreMenuOpen = Boolean(moreAnchorEl);

  return (
    <div>
      <div style={{ width: '100%', borderRadius: 0, border: 'none' }}>
        <div>
          <TextField
            label="Add a public comment..."
            fullWidth
            multiline
            value={newComment}
            onChange={handleCommentChange}
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <IconButton onClick={handlePublish}>
              <SendIcon />
            </IconButton>
            <IconButton onClick={handleCancel}>
              <CancelIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
      {items.map(item => (
        <div key={item.topComment.id} 
          style={{ width: '100%', borderRadius: 0, border: 'none'}}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}
            onMouseEnter={() => {setIsHovered({[item.topComment.id]: true})}}
            onMouseLeave={() => {setIsHovered({[item.topComment.id]: false})}}>
            <Link href={`/user/home?id=${item.topComment.userInfo.id}`}>
              <Avatar src={item.topComment.userInfo.avatar} sx={{ width: 35, height: 35 }}/>
            </Link>
            <div style={{ marginLeft: '1rem', width: '100%', marginBottom:'1rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="body1" gutterBottom>
                    {item.topComment.userInfo.account}
                    <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{timeAgo(new Date(item.topComment.createTime).getTime())}</span>
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:'1rem', fontWeight:'medium'}}>{item.topComment.content}</Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton onClick={() => handleExpandClick(item.topComment.id)}>
                      <ReplyIcon />
                      <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{item.topComment.replyCount}</span>
                    </IconButton>
                    <IconButton onClick={() => handleLike(item.topComment.id, item.topComment.isLiked)}>
                      {item.topComment.isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                      <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{item.topComment.likeCount}</span>
                    </IconButton>
                    <Button onClick={() => setSelectedCommentId(item.topComment.id)} sx={{ textTransform: 'none'}}>Reply</Button>
                  </Stack>
                </div>
                <div>
                  {isHovered[item.topComment.id] && 
                    <IconButton
                      aria-label="more"
                      aria-controls="more-menu"
                      aria-haspopup="true"
                      onClick={(event) => handleMoreClick(event, item.topComment.id)}>
                      <IoMdMore />
                    </IconButton>
                  }
                  <Menu
                    id="basic-menu"
                    anchorEl={moreAnchorEl}
                    open={isMoreMenuOpen && selectedCommentToDelete === item.topComment.id}
                    onClose={handleMoreClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <Box sx={{ minWidth: 170 }}>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleDeleteComment(item.topComment.id)}>
                          <ListItemIcon><DeleteIcon/></ListItemIcon>
                          <ListItemText primary='Delete' sx={{ ml: '-20px'}} />
                        </ListItemButton>
                      </ListItem>
                    </Box>
                  </Menu>
                </div>
              </div>
              {selectedCommentId  === item.topComment.id && (
                <div style={{ marginTop: '1rem', flexGrow: 1 }}>
                  <TextField
                    fullWidth
                    multiline
                    placeholder="Write a reply..."
                    value={replyText}
                    onChange={handleReplyChange}
                  />
                  <Stack direction="row" alignItems="center" spacing={2} style={{ marginTop: '1rem' }}>
                    <Button onClick={() => handlePublishReply(item.topComment.id, item.topComment.userId)} sx={{ textTransform: 'none'}}>Publish</Button>
                    <Button onClick={() => setSelectedCommentId(null)} sx={{ textTransform: 'none'}}>Cancel</Button>
                  </Stack>
                </div>
              )}
            </div>
          </div>
          <Collapse in={expandedCommentId[item.topComment.id]} timeout="auto" unmountOnExit>
            <div style={{ paddingLeft: '2.5rem', marginTop:'0rem' }}>
              {item.commentList?.map(reply => (
                <div key={reply.id} style={{ marginBottom: '1rem' }}
                  onMouseEnter={() => {setIsHovered({[reply.id]: true})}}
                  onMouseLeave={() => {setIsHovered({[reply.id]: false})}}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Link href={`/user/home?id=${reply.userInfo.id}`}>
                      <Avatar src={reply.userInfo.avatar} sx={{ width: 25, height: 25, marginRight: '0.5rem' }} />
                    </Link>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <Typography variant="body1" gutterBottom>
                            {reply.userInfo.account}
                            <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{timeAgo(new Date(reply.createTime).getTime())}</span>
                          </Typography>
                          <Typography variant="body2" style={{ fontSize:'0.99rem', fontWeight:'medium'}}>{reply.content}</Typography>
                          <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => handleLike(reply.id, reply.isLiked)}>
                              {reply.isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                              <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{reply.likeCount}</span>
                            </IconButton>
                            <Button onClick={() => setSelectedCommentId(reply.id)} sx={{ textTransform: 'none'}}>Reply</Button>
                          </Stack>
                        </div>
                        <div>
                          {isHovered[reply.id] && 
                            <IconButton
                              aria-label="more"
                              aria-controls="more-menu"
                              aria-haspopup="true"
                              onClick={(event) => handleMoreClick(event, reply.id)}>
                              <IoMdMore />
                            </IconButton>
                          }
                          <Menu
                            id="basic-menu"
                            anchorEl={moreAnchorEl}
                            open={isMoreMenuOpen && selectedCommentToDelete === reply.id}
                            onClose={handleMoreClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            <Box sx={{ minWidth: 170 }}>
                              <ListItem disablePadding>
                                <ListItemButton onClick={() => handleDeleteComment(reply.id)}>
                                  <ListItemIcon><DeleteIcon/></ListItemIcon>
                                  <ListItemText primary='Delete' sx={{ ml: '-20px'}} />
                                </ListItemButton>
                              </ListItem>
                            </Box>
                          </Menu>
                        </div>
                      </div>
                      {selectedCommentId  === reply.id && (
                        <div style={{ marginTop: '1rem' }}>
                          <TextField
                            fullWidth
                            multiline
                            placeholder="Write a reply..."
                            value={replyText}
                            onChange={handleReplyChange}
                          />
                          <Stack direction="row" alignItems="center" spacing={2} style={{ marginTop: '1rem' }}>
                            <Button onClick={() => handlePublishReply(reply.topId, reply.userId)} sx={{ textTransform: 'none'}}>Publish</Button>
                            <Button onClick={() => setSelectedCommentId(null)} sx={{ textTransform: 'none'}}>Cancel</Button>
                          </Stack>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}

export default Comment;