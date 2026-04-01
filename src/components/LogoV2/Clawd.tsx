import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box, Text } from '../../ink.js';
import { env } from '../../utils/env.js';
export type ClawdPose = 'default' | 'arms-up' | 'look-left' | 'look-right';

type Props = {
  pose?: ClawdPose;
};

// Husanai Tiger Head — Unicode block style
// 4 rows × 9 cols, consistent with original Clawd dimensions.
// Uses block elements (▛▜▐▌▗▖▝▘▀▄) for reliable cross-terminal rendering.
//
//  ▗▛▀▀▀▜▖     ← forehead + ears (▗▖ = ear tips)
//  ▐●▀▄▀●▌     ← eyes (yellow ●) + nose stripe (▀▄)
//  ▐ ╰─╯ ▌     ← mouth
//  ▝▄▄▄▄▄▘     ← jaw

export function Clawd(t0: Props) {
  const $ = _c(4);
  let t1;
  if ($[0] !== t0) {
    t1 = t0 === undefined ? {} : t0;
    $[0] = t0;
    $[1] = t1;
  } else {
    t1 = $[1];
  }

  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = (
      <Box flexDirection="column" alignItems="center">
        <Text>
          <Text color="clawd_body">{"▗▛"}</Text>
          <Text color="white" backgroundColor="clawd_background">{"▀▀▀"}</Text>
          <Text color="clawd_body">{"▜▖"}</Text>
        </Text>
        <Text>
          <Text color="clawd_body">{"▐"}</Text>
          <Text color="yellow" backgroundColor="clawd_background" bold={true}>{"●"}</Text>
          <Text color="white" backgroundColor="clawd_background">{"▀▄▀"}</Text>
          <Text color="yellow" backgroundColor="clawd_background" bold={true}>{"●"}</Text>
          <Text color="clawd_body">{"▌"}</Text>
        </Text>
        <Text>
          <Text color="clawd_body">{"▐"}</Text>
          <Text backgroundColor="clawd_background" color="clawd_body">{" ╰─╯ "}</Text>
          <Text color="clawd_body">{"▌"}</Text>
        </Text>
        <Text>
          <Text color="clawd_body">{"▝▄▄▄▄▄▘"}</Text>
        </Text>
      </Box>
    );
    $[2] = t2;
  } else {
    t2 = $[2];
  }

  let t3;
  if ($[3] !== t2) {
    $[3] = t2;
  }

  return t2;
}
