import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box, Text } from '../../ink.js';
import { env } from '../../utils/env.js';
export type ClawdPose = 'default' | 'arms-up' | 'look-left' | 'look-right';

type Props = {
  pose?: ClawdPose;
  compact?: boolean;
};

// Husanai Tiger Head — binary digit art style
// Full version: 13-line tiger face made of 0s and 1s + slogan
// Compact version: 3-line mini block tiger for condensed layout

const TIGER_LINES = [
  '       1             1',
  '      101           101',
  '     1010101010101010101',
  '     10  10101010101  01',
  '    101  1011  1101  101',
  '    1010  100  001  0101',
  '     1010101    1010101',
  '      10101  10  10101',
  '       10101010101010',
  '        101010101010',
  '         1010101010',
  '           10    10',
  '           10    10',
];

const SLOGAN = '虎三智能 · Husanai · AI Coding';

// Compact 3-row tiger for condensed logo mode
const COMPACT_LINES = [
  '▗▛▀▀▀▜▖',
  '▐●▀▄▀●▌',
  '▝▄▄▄▄▄▘',
];

export function Clawd(t0: Props) {
  const $ = _c(6);
  let t1;
  if ($[0] !== t0) {
    t1 = t0 === undefined ? {} : t0;
    $[0] = t0;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const { compact } = t1;

  // Compact mode: small block tiger for condensed layout
  if (compact) {
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
      t2 = (
        <Box flexDirection="column" alignItems="center">
          {COMPACT_LINES.map((line, i) => (
            <Text key={i} color="clawd_body">{line}</Text>
          ))}
        </Box>
      );
      $[2] = t2;
    } else {
      t2 = $[2];
    }
    return t2;
  }

  // Full mode: large binary digit tiger
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = (
      <Box flexDirection="column" alignItems="center">
        {TIGER_LINES.map((line, i) => (
          <Text key={i} color="clawd_body">{line}</Text>
        ))}
        <Text>{' '}</Text>
        <Text color="yellow">{SLOGAN}</Text>
      </Box>
    );
    $[3] = t3;
  } else {
    t3 = $[3];
  }

  return t3;
}