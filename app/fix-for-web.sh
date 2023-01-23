#!/bin/bash
# for react-native-screens
# reference: https://github.com/react-navigation/react-navigation/issues/8993import=shouldUseActivityState

import=shouldUseActivityState
echo "Fixing $import ..."
if grep -q "export const $import = false;" ./node_modules/react-native-screens/lib/module/index.js; then
    echo "$import fixed already!"
else
    echo -e "\nexport const $import = false;">> ./node_modules/react-native-screens/lib/module/index.js
fi
