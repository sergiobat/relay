/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<a379bbdee92f2bdea8a5e061ea5989fa>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayReaderRequiredFieldsTest3Fragment$fragmentType: FragmentType;
export type RelayReaderRequiredFieldsTest3Fragment$ref = RelayReaderRequiredFieldsTest3Fragment$fragmentType;
export type RelayReaderRequiredFieldsTest3Fragment$data = ?{|
  +me: {|
    +lastName: string,
  |},
  +$refType: RelayReaderRequiredFieldsTest3Fragment$fragmentType,
  +$fragmentType: RelayReaderRequiredFieldsTest3Fragment$fragmentType,
|};
export type RelayReaderRequiredFieldsTest3Fragment = RelayReaderRequiredFieldsTest3Fragment$data;
export type RelayReaderRequiredFieldsTest3Fragment$key = {
  +$data?: RelayReaderRequiredFieldsTest3Fragment$data,
  +$fragmentRefs: RelayReaderRequiredFieldsTest3Fragment$fragmentType,
  +$fragmentSpreads: RelayReaderRequiredFieldsTest3Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayReaderRequiredFieldsTest3Fragment",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lastName",
              "storageKey": null
            },
            "action": "LOG",
            "path": "me.lastName"
          }
        ],
        "storageKey": null
      },
      "action": "LOG",
      "path": "me"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "d4ab0530862820fe6aff8595b3700bd9";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayReaderRequiredFieldsTest3Fragment$fragmentType,
  RelayReaderRequiredFieldsTest3Fragment$data,
>*/);
