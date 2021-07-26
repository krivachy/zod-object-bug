import { importedModel, locallyDefinedModel } from './src/models';

describe('Zod object bug', () => {

  test('locally defined email validation', () => {
    const validationResult = locallyDefinedModel.safeParse({
      email: 'not an email'
    })
    // Passes
    expect(validationResult.success).toBe(false);
  })

  test('imported email validation', () => {
    const validationResult = importedModel.safeParse({
      email: 'not an email'
    })
    console.log(JSON.stringify(validationResult, null, 2))
    // Fails, validation result is:
    //     {
    //       "success": true,
    //       "data": {}
    //     }
    expect(validationResult.success).toBe(false);
  })
})