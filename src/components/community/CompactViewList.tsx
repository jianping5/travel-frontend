'use client'
import { Box } from "@mui/material";
import DynamicCompact from "./DynamicCompact";

const CompactViewList: React.FC<{items:CommunityDynamicView[]}> = ({items}) => {
  return (
    <>
    {items?.map(dynamic => {
      return (
        <Box key={dynamic.id}>
          <DynamicCompact dynamic={dynamic} />
        </Box>
      )
    })}
    </>
  )
}

export default CompactViewList;