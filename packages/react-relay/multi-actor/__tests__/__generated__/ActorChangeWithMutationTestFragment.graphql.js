/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<42e3acd12eaa16f1bb9da3875e2c73f7>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ActorChangeWithMutationTestFragment$fragmentType: FragmentType;
export type ActorChangeWithMutationTestFragment$ref = ActorChangeWithMutationTestFragment$fragmentType;
export type ActorChangeWithMutationTestFragment$data = {|
  +id: string,
  +actor: ?{|
    +id: string,
    +name: ?string,
  |},
  +$refType: ActorChangeWithMutationTestFragment$fragmentType,
  +$fragmentType: ActorChangeWithMutationTestFragment$fragmentType,
|};
export type ActorChangeWithMutationTestFragment = ActorChangeWithMutationTestFragment$data;
export type ActorChangeWithMutationTestFragment$key = {
  +$data?: ActorChangeWithMutationTestFragment$data,
  +$fragmentRefs: ActorChangeWithMutationTestFragment$fragmentType,
  +$fragmentSpreads: ActorChangeWithMutationTestFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActorChangeWithMutationTestFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "actor",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FeedUnit",
  "abstractKey": "__isFeedUnit"
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "19cbfdfb8e8c68efa9a193744af18576";
}

module.exports = ((node/*: any*/)/*: Fragment<
  ActorChangeWithMutationTestFragment$fragmentType,
  ActorChangeWithMutationTestFragment$data,
>*/);
