function CodeBreakerEM() {

	this.check = function(guessCode, code) {
		
		var matchDetector = new matchDetector(guessCode, code);
		var matchResult = matchDetector.match();
		var matchResultInterpreter = new matchResultInterpreter(matchResult);
		var checkResult = matchResultInterpreter.interpret();
		return checkResult;

		function matchDetector(guessCode, code) {		
			this.match = function(){			
				var perfectMatcher = CreatePerfectMatcher();
				var partialMatcher = CreatePartialMatcher();
				return {perfectMatches : detectMaches(perfectMatcher), partialMatches : detectMaches(partialMatcher)};
			}

			function detectMaches(matcher) {
				var matchResult = "";
				for(var currentCharacterIndexToCheck in guessCode) {				
					if(matcher.machCheckerForCharacterIndex(currentCharacterIndexToCheck)) {
						matchResult += matcher.characterWhenIndexMatch;
					}		
				}
				return matchResult;	
			}

			function CreatePerfectMatcher() {
				var characterWhenIndexMatch = "*";
				return {machCheckerForCharacterIndex : isPerfectMatch, characterWhenIndexMatch : characterWhenIndexMatch };	

				function isPerfectMatch(currentCharacterIndexToCheck){
					var characterOnIndexAreEquals = (guessCode[currentCharacterIndexToCheck] === code[currentCharacterIndexToCheck]);
					return characterOnIndexAreEquals;
				}
			}

			function CreatePartialMatcher() {
				var characterWhenIndexMatch = "-";
				return {machCheckerForCharacterIndex : isPartialMatch, characterWhenIndexMatch : characterWhenIndexMatch };	

				function isPartialMatch(currentCharacterIndexToCheck){
					var characterNotFound = -1;
					var characterExistsInCode = (code.indexOf(guessCode[currentCharacterIndexToCheck]) != characterNotFound);
					return characterExistsInCode;
				}
			}
		}

		function matchResultInterpreter(matchResult) {
			this.interpret = function() {
				var interpretedResult = partialMatchesInterpreted() + perfectMatchesInterpreted();
				return interpretedResult;
			}

			function numberOfOnlyPartialMatches() {
				return (matchResult.partialMatches.length - matchResult.perfectMatches.length);
			}

			function partialMatchesInterpreted() {
				var partialMatchesStartIndex = 0;
				return matchResult.partialMatches.substring(partialMatchesStartIndex, numberOfOnlyPartialMatches());
			}

			function perfectMatchesInterpreted() {
				return matchResult.perfectMatches;	
			}
		}
	};
}