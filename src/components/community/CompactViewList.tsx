'use client'
import DynamicCompact from "./DynamicCompact";

const CompactViewList: React.FC<{items:CommunityDynamicView[]}> = ({items}) => {
  return (
    <>
    {items?.map(dynamic => {
      return (
        <DynamicCompact dynamic={dynamic} />
      )
    })}
    </>
  )
}

export default CompactViewList;