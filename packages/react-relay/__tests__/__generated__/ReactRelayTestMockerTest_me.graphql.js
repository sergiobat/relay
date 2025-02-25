/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<3527c9db5616d44a5e7a0194b460d49b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ReactRelayTestMockerTest_me$fragmentType: FragmentType;
export type ReactRelayTestMockerTest_me$ref = ReactRelayTestMockerTest_me$fragmentType;
export type ReactRelayTestMockerTest_me$data = {|
  +name: ?string,
  +$refType: ReactRelayTestMockerTest_me$fragmentType,
  +$fragmentType: ReactRelayTestMockerTest_me$fragmentType,
|};
export type ReactRelayTestMockerTest_me = ReactRelayTestMockerTest_me$data;
export type ReactRelayTestMockerTest_me$key = {
  +$data?: ReactRelayTestMockerTest_me$data,
  +$fragmentRefs: ReactRelayTestMockerTest_me$fragmentType,
  +$fragmentSpreads: ReactRelayTestMockerTest_me$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReactRelayTestMockerTest_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "759aa7a952c8cbeb8b60e6ec8e032369";
}

module.exports = ((node/*: any*/)/*: Fragment<
  ReactRelayTestMockerTest_me$fragmentType,
  ReactRelayTestMockerTest_me$data,
>*/);
