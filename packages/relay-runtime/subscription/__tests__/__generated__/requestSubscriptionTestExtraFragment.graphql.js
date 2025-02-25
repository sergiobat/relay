/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<ee3b9d2b116ee2a5b71a41fc7eeeef5e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type requestSubscriptionTestExtraFragment$fragmentType: FragmentType;
export type requestSubscriptionTestExtraFragment$ref = requestSubscriptionTestExtraFragment$fragmentType;
export type requestSubscriptionTestExtraFragment$data = {|
  +isEnabled: ?boolean,
  +$refType: requestSubscriptionTestExtraFragment$fragmentType,
  +$fragmentType: requestSubscriptionTestExtraFragment$fragmentType,
|};
export type requestSubscriptionTestExtraFragment = requestSubscriptionTestExtraFragment$data;
export type requestSubscriptionTestExtraFragment$key = {
  +$data?: requestSubscriptionTestExtraFragment$data,
  +$fragmentRefs: requestSubscriptionTestExtraFragment$fragmentType,
  +$fragmentSpreads: requestSubscriptionTestExtraFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "requestSubscriptionTestExtraFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isEnabled",
      "storageKey": null
    }
  ],
  "type": "Config",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "93722b56e12ad71765eb789731338c25";
}

module.exports = ((node/*: any*/)/*: Fragment<
  requestSubscriptionTestExtraFragment$fragmentType,
  requestSubscriptionTestExtraFragment$data,
>*/);
