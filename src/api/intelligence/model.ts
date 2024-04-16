// 智能攻略
interface StrategyCreateReq {
  destination: string;
  duration: string;
  budget: string;
  tripGroup: string;
  tripMood: string;
  strategy: string;
}

interface StrategyDeleteReq {
  id: number;
}

interface StrategyView {
  id: number
  destination: string;
  duration: number;
  budget: string;
  tripGroup: string;
  tripMood: string;
  strategy: string;
  createTime: string;
}

interface StrategyDetailReq {
  id: number
}

interface StrategyDetailResp {
  strategy: StrategyView
}

interface BaseStrategyDetailResp {
  code: string
  data: StrategyDetailResp
  msg: string
}

interface StrategyListResp {
  list: StrategyView[];
}

interface BaseStrategyListResp {
  code: string;
  data: StrategyListResp;
  msg: string;
}

interface StrategyGenerateReq {
  destination: string;
  duration: number;
  budget: string;
  tripGroup: string;
  tripMood: string;
}

interface StrategyGenerateResp {
  strategy: string;
}

interface BaseStrategyGenerateResp {
  code: string
  data: StrategyGenerateResp
  msg: string
}

interface ConversationCreateReq {
  content: string;
  isGenerated: boolean;
}

interface ConversationGenerateReq {
  content: string;
  isGenerated: boolean;
}

interface ConversationGenerateResp {
  content: string;
}

interface BaseConversationGenerateResp {
  code: string
  data: ConversationGenerateResp
  msg: string
}

interface ConversationView {
  id: number;
  content: string;
  isGenerated: boolean;
}

interface ConversationListResp {
  list: ConversationView[];
}

interface BaseConversationListResp {
  code: string;
  data: ConversationListResp;
  msg: string;
}