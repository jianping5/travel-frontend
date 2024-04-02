// 用户
type UserInfoView = {
  id: number
  account: string
  avatar: string
  email: string
}

// 收藏
type FavoriteCreateReq = {
  name: string
}

type FavoriteDeleteReq = {
  id: number
}

type FavoriteListReq = {
  userId: number
}

type FavoriteListView = {
  id: number
  userId: number
  name: string
  coverUrl: string
}

type FavoriteListResp = {
  list: FavoriteListView[]
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

type FavorDeleteReq = {
  id: number
}

type FavorListReq = {
  favoriteId: number
}

type FavorView = {
  itemType: number
  itemId: number
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
  CoverUrl: string
  UserId: number
  Account: string
  title: string
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
type ContentListResp = {
  list: ContentView[]
  total: number
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
}

type CommentListView = {
  topComment: CommentView
  commentList: CommentView[]
}

type CommentListResp = {
  list: CommentListView[]
  total: number
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
  messageType: number;
  messageStatus: boolean;
  content: string;
  messageUserId: number;
  account: string;
}

interface MessageListResp {
  list: MessageView[];
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

interface UserHomeDynamicListReq {
  userId: number;
  pageNum: number;
  pageSize: number;
}

interface UserHomeDynamicListResp {
  list: CommunityDynamicView[];
  total: number;
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
  contentUrl: string;
  uploadSwitch: boolean;
}

interface CopyrightDetailReq {
  id: number;
}

interface CopyrightListReq {
  userId: number;
}

interface CopyrightView {
  id: number;
  userId: number;
  itemType: number;
  itemId: number;
  metadata: string;
  tradeHash: string;
  address: string;
  status: number;
  createTime: string;
  title: string;
  coverUrl: string;
  account: string;
  avatar: string;
}

interface CopyrightDetailResp {
  copyright: CopyrightView;
  userInfo: UserInfoView;
}

interface CopyrightListResp {
  list: CopyrightView[];
}


// 推荐
type ContentSimilarReq = {
  tag: string[]
  itemType: number
  itemId: number
}

type ContentSimilarResp = {
  list: ContentView[]
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