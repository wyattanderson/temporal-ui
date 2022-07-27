import { describe, expect, it } from 'vitest';
import { isFromGoSDK } from './is-from-go-sdk';
import typeScriptStacktraceQueryJson from '../../../fixtures/stacktrace-query.ts-sdk.json';
import UnixGoStacktraceQueryJson from '../../../fixtures/stacktrace-query.go-sdk.json';
import WindowsGoStacktraceQueryJson from '../../../fixtures/stacktrace-query.go-sdk.windows.json';
import JavaStacktraceQueryJson from '../../../fixtures/stacktrace-query.java-sdk.json';

describe('isFromGoSDK', () => {
  it('should return false for a stacktrace generated by TypeScipt SDK', () => {
    const stackTraceText: string =
      typeScriptStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromGoSDK(stackTraceText);
    expect(result).toBe(false);
  });
  it('should return true for a stacktrace generated by GO SDK on a Unix system', () => {
    const stackTraceText: string =
      UnixGoStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromGoSDK(stackTraceText);
    expect(result).toBe(true);
  });
  it('should return true for a stacktrace generated by GO SDK on a Windows system', () => {
    const stackTraceText: string =
      WindowsGoStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromGoSDK(stackTraceText);
    expect(result).toBe(true);
  });
  it('should return false for a stacktrace generated by Java SDK', () => {
    const stackTraceText: string =
      JavaStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromGoSDK(stackTraceText);
    expect(result).toBe(false);
  });
});
