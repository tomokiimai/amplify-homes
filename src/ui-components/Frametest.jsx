/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frametest(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="6977px"
      height="3885px"
      overflow="hidden"
      position="relative"
      borderRadius="300px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frametest")}
    >
      <Image
        width="4451px"
        height="3229px"
        position="absolute"
        top="146px"
        left="119px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image 17")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="400px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="468.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="2152px"
        height="1240px"
        position="absolute"
        top="1240px"
        left="4825px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="テスト&#xA;テキスト"
        {...getOverrideProps(
          overrides,
          "\u30C6\u30B9\u30C8 \u30C6\u30AD\u30B9\u30C8"
        )}
      ></Text>
    </View>
  );
}
