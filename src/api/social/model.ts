// 收藏
type FavoriteCreateReq = {
  name: string
}

type FavoriteDeleteReq = {
  id: number
}

type FavoriteListReq = {
  userId: number
  itemId: number
}

type FavoriteDetailReq = {
  id: number
}

type FavoriteListView = {
  id: number
  userId: number
  name: string
  coverUrl: string
  isFavored: boolean
}

type FavoriteListResp = {
  list: FavoriteListView[]
}

type FavoriteDetailResp = {
  favoriteDetail: FavoriteListView
}

type BaseFavoriteDetailResp = {
  code: string
  data: FavoriteDetailResp
  msg: string
}

interface BaseFavoriteListResp {
  code: string
  data: FavoriteListResp
  msg: string
}

type FavorReq = {
  favoriteId: number
  itemId: number
}

type FavorCancelReq = {
  favoriteId: number
  itemId: number
}

type FavorDeleteReq = {
  id: number
}

type FavorListReq = {
  favoriteId: number
}

type FavorView = {
  id: number
  itemType: number
  itemId: number
  content: string
  coverUrl: string
  userId: number
  account: string
  title: string
  likeCount: number
  createTime: string
}

type FavorListResp = {
  list: FavorView[]
}

interface BaseFavorListResp {
  code: string
  data: FavorListResp
  msg: string
}

// 历史记录
type HistoryCreateReq = {
  itemId: number
}

type HistoryDeleteReq = {
  id: number
}

type HistoryListReq = {
  pageNum: number
  pageSize: number
}

type HistoryView = {
  id: number
  itemType: number
  itemId: number
  content: string
  coverUrl: string
  userId: number
  account: string
  title: string
  description: string
  likeCount: number
  createTime: string
}

type HistoryListResp = {
  list: HistoryView[]
  total: number
}

interface BaseHistoryListResp {
  code: string,
  data: HistoryListResp,
  msg: string
}

// 社区
type CommunityCreateReq = {
  name: string
  description: string
}

type CommunityDeleteReq = {
  id: number
}

type CommunityUpdateReq = {
  id: number
  description: string
  avatar: string
}

type CommunityListReq = {
  userId: number
}

type CommunityJoinReq = {
  communityId: number
  role: number
}

type CommunityQuitReq = {
  communityId: number
}

type CommunityDetailReq = {
  id: number
}

type CommunityView = {
  id: number
  name: string
  description: string
  avatar: string
  memberCount: number
  createTime: string
  isJoined: boolean
}

type CommunityListResp = {
  list: CommunityView[]
}

interface BaseCommunityListResp {
  code: string
  data: CommunityListResp
  msg: string
}

type CommunityDetailResp = {
  community: CommunityView
  userId: number
  account: string
  avatar: string
}

interface BaseCommunityDetailResp {
  code: string
  data: CommunityDetailResp
  msg: string
}

type CommunityDynamicCreateReq = {
  communityId: number
  title: string
  description: string
  content: string
  fileType: number
}

type CommunityDynamicDeleteReq = {
  id: number
}

type CommunityDynamicListReq = {
  type: number
  joinedSwitch: boolean
  pageNum: number
  pageSize: number
}

type CommunityDynamicSpecificListReq = {
  sortType: number
  communityId: number
  pageNum: number
  pageSize: number
}

type CommunityDynamicDetailReq = {
  id: number
}

type CommunityDynamicDetailResp = {
  dynamicDetail: CommunityDynamicView
}

type BaseCommunityDynamicDetailResp = {
  code: string
  data: CommunityDynamicDetailResp
  msg: string
}

type CommunityDynamicView = {
  id: number
  userInfo: UserInfoView
  communityId: number
  community: CommunityView
  title: string
  description: string
  content: string
  fileType: number
  likeCount: number
  commentCount: number
  createTime: string
  isLiked: boolean
}

type CommunityDynamicListResp = {
  list: CommunityDynamicView[]
  total: number
}

type CommunityDynamicSpecificListResp = {
  list: CommunityDynamicView[]
  total: number
}

interface BaseCommunityDynamicListResp {
  code: string
  data: CommunityDynamicListResp
  msg: string
}

interface BaseCommunityDynamicSpecificListResp {
  code: string
  data: CommunityDynamicSpecificListResp
  msg: string
}

// 创作
type ContentCreateReq = {
  itemType: number
  title: string
  coverUrl: string
  content: string
  description: string
  tag: string[]
}

type ContentDeleteReq = {
  id: number
}

type ContentUpdateReq = {
  id: number
  title: string
  content: string
  coverUrl: string
  description: string
  tag: string[]
}

type ContentDetailReq = {
  id: number
}

type ContentListReq = {
  contentType: number
  itemType: number
  pageNum: number
  pageSize: number
}

type ContentView = {
  id: number
  userId: number
  userInfo: UserInfoView
  itemType: number
  title: string
  coverUrl: string
  content: string
  description: string
  tag: string[]
  likeCount: number
  commentCount: number
  favorCount: number
  createTime: string
  isLiked: boolean
  isFavored: boolean
}

type ContentSimpleView = {
  id: number
  title: string
  coverUrl: string
  likeCount: number
  createTime: string
}

type ContentDetailResp = {
  contentDetail: ContentView
}

interface BaseContentDetailResp {
  code: string
  data: ContentDetailResp
  msg: string
}

type ContentListResp = {
  list: ContentView[]
  total: number
}

interface BaseContentListResp {
  code: string
  data: ContentListResp
  msg: string
}

// 评论
type CommentCreateReq = {
  commentItemId: number
  commentItemType: number
  parentUserId: number
  topId: number
  content: string
}

type CommentDeleteReq = {
  id: number
}

type CommentListReq = {
  commentItemType: number
  commentItemId: number
  pageNum: number
  pageSize: number
}

type CommentView = {
  id: number
  userId: number
  userInfo: UserInfoView
  parentUserInfo: UserInfoView
  commentItemType: number
  commentItemId: number
  parentUserId: number
  topId: number
  content: string
  isLiked: boolean
  likeCount: number
  replyCount: number
  createTime: string
}

type CommentListView = {
  topComment: CommentView
  commentList: CommentView[]
}

type CommentListResp = {
  list: CommentListView[]
  total: number
}

interface BaseCommentListResp {
  code: string
  data: CommentListResp
  msg: string
}

// 消息
type MessageCreateReq = {
  userIds: number[]
  itemType: number
  itemId: number
  messageType: number
  messageUserId: number
  content: string
}

interface MessageDeleteReq {
  id: number;
}

interface MessageUpdateReq {
  id: number;
  messageStatus: boolean;
}

interface MessageView {
  id: number;
  itemType: number;
  itemId: number;
  coverUrl: string;
  title: string;
  createTime: string;
  messageType: number;
  messageStatus: boolean;
  content: string;
  messageUserId: number;
  account: string;
}

interface MessageListResp {
  list: MessageView[];
}

interface BaseMessageListResp {
  code: string
  data: MessageListResp
  msg: string
}

// 用户空间
interface UserHomeListReq {
  userId: number;
}

interface UserHomeListResp {
  recentArticleList: ContentView[];
  recentVideoList: ContentView[];
  recommendArticleList: ContentView[];
  recommendVideoList: ContentView[];
}

interface BaseUserHomeListResp {
  code: string
  data: UserHomeListResp
  msg: string
}

interface UserHomeContentListReq {
  userId: number;
  itemType: number;
  sortType: number;
  pageNum: number;
  pageSize: number;
}

interface UserHomeContentListResp {
  list: ContentView[];
  total: number;
}

interface BaseUserHomeContentListResp {
  code: string
  data: UserHomeContentListResp
  msg: string
}

interface UserHomeDynamicListReq {
  userId: number;
  pageNum: number;
  pageSize: number;
}

interface UserHomeDynamicListResp {
  list: CommunityDynamicView[];
  total: number;
}

interface BaseUserHomeDynamicListResp {
  code: string
  data: UserHomeDynamicListResp
  msg: string
}

// 点赞
interface LikeReq {
  itemType: number;
  itemId: number;
  likedStatus: boolean;
}

// 版权
interface CopyrightCreateReq {
  itemType: number;
  itemId: number;
  uploadSwitch: boolean;
}

interface CopyrightDetailReq {
  id: number;
}

interface CopyrightListReq {
  userId: number;
}

interface CopyrightCreateResp {
  ipfsHash: string;
}

interface CopyrightMintReq {
  itemType: number;
  itemId: number;
  tokenId: number;
  accountAddress: string;
}

interface BaseCopyrightCreateResp {
  code: string
  data: CopyrightCreateResp
  msg: string
}

interface CopyrightDetailResp {
  copyright: CopyrightView;
  userInfo: UserInfoView;
}

interface BaseCopyrightDetailResp {
  code: string
  data: CopyrightDetailResp
  msg: string
}

interface CopyrightListResp {
  list: CopyrightView[];
}

interface BaseCopyrightListResp {
  code: string
  data: CopyrightListResp
  msg: string
}


// 推荐
type ContentSimilarReq = {
  itemType: number
  itemId: number
}

type ContentSimilarResp = {
  list: ContentView[]
}

interface BaseContentSimilarResp {
  code: string
  data: ContentSimilarResp
  msg: string
}

// 检索
type SearchReq = {
  keyword: string
  itemType: number
  sortType: number
  pageNum: number
  pageSize: number
}

type SearchResp = {
  contentList: ContentView[]
  communityList: CommunityView[]
  userList: UserInfoView[]
  dynamicList: CommunityDynamicView[]
  copyrightList: CopyrightView[]
  total: number
}

interface BaseSearchResp {
  code: string
  data: SearchResp
  msg: string
}