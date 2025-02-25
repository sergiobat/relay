/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<dfff8ea4077a0b73db21727be3d68d2b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType: FragmentType;
export type RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$ref = RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType;
export type RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$data = {|
  +plaintext: ?string,
  +$refType: RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType,
  +$fragmentType: RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType,
|};
export type RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name = RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$data;
export type RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$key = {
  +$data?: RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$data,
  +$fragmentRefs: RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType,
  +$fragmentSpreads: RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "plaintext",
      "storageKey": null
    }
  ],
  "type": "PlainUserNameRenderer",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "b9c5673e4b3f21f63a8efe831dfea528";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$fragmentType,
  RelayReaderTestWhenMatchDirectiveIsPresentPlainUserNameRenderer_name$data,
>*/);
