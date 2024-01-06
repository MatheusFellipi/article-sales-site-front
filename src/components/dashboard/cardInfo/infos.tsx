import { Box, Flex, Progress } from "@chakra-ui/react";
import { InfoType } from "../../../types/components/cardInfo";

interface Props {
  inf: InfoType[];
}

export const InfosComponent = ({ inf }: Readonly<Props>) => (
  <>
    {inf.map((item) => (
      <Box
        pl={"5.2rem"}
        pt={"5"}
        justifyContent={"flex-start"}
        key={item.themes}
      >
        <Box as={"p"} fontSize={"12px"} color={"gray.600"} overflow="hidden">
          {item.themes}
        </Box>
        <Flex pl={2} alignItems={"center"} justifyContent={"flex-start"}>
          <Box fontWeight={"bold"} fontSize={"22px"}>
            {item.total}
          </Box>
          <Box pl={2} w={"130px"}>
            <Progress
              isAnimated
              bgColor={"gray.400"}
              h={"4px"}
              value={item.total}
            />
          </Box>
        </Flex>
      </Box>
    ))}
  </>
);
