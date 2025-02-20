/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c0ddac28f2974f2c010c6446efb0fcf5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType: FragmentType;
export type RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$ref = RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType;
export type RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$data = {|
  +id: string,
  +address: ?{|
    +city: ?string,
  |},
  +$refType: RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType,
  +$fragmentType: RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType,
|};
export type RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress = RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$data;
export type RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$key = {
  +$data?: RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$data,
  +$fragmentRefs: RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType,
  +$fragmentSpreads: RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "StreetAddress",
      "kind": "LinkedField",
      "name": "address",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "city",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "5b1311ee9c983b135f1bbe6eca618721";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$fragmentType,
  RelayReaderTestShouldHaveIsmissingdataTrueIfDataIsMissingAddress$data,
>*/);
