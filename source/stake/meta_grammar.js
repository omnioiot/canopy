Stake.extend({
  MetaGrammar: Stake.Parser.fromSexp(
    ['grammar', 'MetaGrammar',
      
      ['rule', 'grammar',
        ['type', 'Stake.Compiler.Grammar',
          ['sequence',
            ['repeat', 0, ['reference', 'space']],
            ['reference', 'grammar_name'],
            ['repeat', 1,
              ['sequence',
                ['repeat', 0, ['reference', 'space']],
                ['reference', 'grammar_rule']]],
            ['repeat', 0, ['reference', 'space']]]]],
      
      ['rule', 'grammar_name',
        ['sequence',
          ['string', 'grammar '],
          ['reference', 'identifier']]],
      
      ['rule', 'grammar_rule',
        ['type', 'Stake.Compiler.GrammarRule',
          ['sequence',
            ['string', '#'],
            ['reference', 'identifier'],
            ['repeat', 1, ['reference', 'space']],
            ['string', '<-'],
            ['repeat', 1, ['reference', 'space']],
            ['reference', 'parsing_expression']]]],
      
      ['rule', 'parsing_expression',
        ['choice',
          ['reference', 'choice_expression'],
          ['reference', 'choice_part']]],
      
      ['rule', 'choice_expression',
        ['type', 'Stake.Compiler.ChoiceExpression',
          ['sequence',
            ['label', 'first_expression',
              ['reference', 'choice_part']],
            ['label', 'rest_expressions',
              ['repeat', 1,
                ['sequence',
                  ['repeat', 1, ['reference', 'space']],
                  ['string', '/'],
                  ['repeat', 1, ['reference', 'space']],
                  ['label', 'expression',
                    ['reference', 'choice_part']]]]]]]],
      
      ['rule', 'choice_part',
        ['type', 'Stake.Compiler.ChoicePart',
          ['sequence',
            ['choice',
              ['reference', 'sequence_expression'],
              ['reference', 'atom']],
            ['maybe',
              ['sequence',
                ['repeat', 1, ['reference', 'space']],
                ['reference', 'type_expression']]]]]],
      
      ['rule', 'type_expression',
        ['sequence',
          ['string', '<'],
          ['reference', 'object_identifier'],
          ['string', '>']]],
      
      ['rule', 'sequence_expression',
        ['type', 'Stake.Compiler.SequenceExpression',
          ['sequence',
            ['label', 'first_expression',
              ['reference', 'atom']],
            ['label', 'rest_expressions',
              ['repeat', 1,
                ['sequence',
                  ['repeat', 1, ['reference', 'space']],
                  ['reference', 'atom']]]]]]],
      
      ['rule', 'atom',
        ['type', 'Stake.Compiler.Atom',
          ['sequence',
            ['maybe', ['reference', 'label']],
            ['label', 'expression',
              ['choice',
                ['reference', 'negated_atom'],
                ['reference', 'reference_expression'],
                ['reference', 'string_expression'],
                ['reference', 'any_char_expression'],
                ['reference', 'char_class_expression']]],
            ['maybe', ['reference', 'quantifier']]]]],
      
      ['rule', 'negated_atom',
        ['type', 'Stake.Compiler.NegatedAtom',
          ['sequence',
            ['string', '!'],
            ['reference', 'atom']]]],
      
      ['rule', 'reference_expression',
        ['type', 'Stake.Compiler.ReferenceExpression',
          ['reference', 'identifier']]],
      
      ['rule', 'string_expression',
        ['type', 'Stake.Compiler.StringExpression',
          ['sequence',
            ['string', '"'],
            ['repeat', 0, ['char-class', '[^"]']],
            ['string', '"']]]],
      
      ['rule', 'any_char_expression',
        ['type', 'Stake.Compiler.AnyCharExpression',
          ['string', '.']]],
      
      ['rule', 'char_class_expression',
        ['type', 'Stake.Compiler.CharClassExpression',
          ['sequence',
            ['string', '['],
            ['maybe', ['string', '^']],
            ['repeat', 1,
              ['sequence',
                ['not', ['string', ']']],
                ['any-char']]],
            ['string', ']']]]],
      
      ['rule', 'label',
        ['sequence',
          ['reference', 'identifier'],
          ['string', ':']]],
      
      ['rule', 'object_identifier',
        ['sequence',
          ['reference', 'identifier'],
          ['repeat', 0,
            ['sequence',
              ['string', '.'],
              ['reference', 'identifier']]]]],
      
      ['rule', 'identifier',
        ['sequence',
          ['char-class', '[a-zA-Z_$]'],
          ['repeat', 0,
            ['char-class', '[a-zA-Z0-9_$]']]]],
      
      ['rule', 'quantifier',
        ['choice',
          ['string', '?'],
          ['string', '*'],
          ['string', '+']]],
      
      ['rule', 'space',
        ['char-class', '[\\s\\n\\r\\t]']]])
});

